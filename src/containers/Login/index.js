import React, {useState} from 'react'
import {Container, LoginRegisterButton, StyledForm} from '../../styles'
import InputBlock from '../../components/LoginRegister/InputBlock'
import { LOGIN } from './graphql'
import { useMutation } from '@apollo/react-hooks'
import { useHistory, Link } from 'react-router-dom'

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const buttonEnabled = email.length > 0 && pass.length > 0
    
    const history = useHistory()
    const [login, {loading, error}] = useMutation(LOGIN, {
        variables: {
            email: email,
            password: pass,
        },
        onCompleted:({login: {token}}) => {
            console.log("user has been logged in")
            setIsLoggedIn(true)
            localStorage.setItem('token', token)
        },
        onError: (error) => {
            let errorM = error.message.slice(14)
            setErrorMessage(errorM)
            console.log(error)
        }
    })

    async function handleLogin(event) {
        event.preventDefault()
        await login()
        if (localStorage.getItem('token')) {
            history.push('/')
        }
    }


    return (
        <Container>
        { localStorage.clear() }
        <StyledForm onSubmit={ login }>
            <h1>Welcome back to Recipe Central</h1>
            <p> { errorMessage } </p>
            <InputBlock 
                label="Email" 
                type="text" 
                name="email" 
                onChangeF={(e) => setEmail(e.target.value)} 
                value={email} 
            />
            <InputBlock 
                label="Password" 
                type="password" 
                name="password" 
                onChangeF={(e) => setPass(e.target.value)} 
                value={pass} 
            />
            <LoginRegisterButton disabled={ !buttonEnabled } onClick={ handleLogin }>Log In</LoginRegisterButton>
            <p>or <Link to="/register">Register</Link></p>
        </StyledForm>
        </Container>
    )
}

export default Login