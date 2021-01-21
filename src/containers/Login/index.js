import React, {useState} from 'react'
import {Container, LoginRegisterButton, StyledForm} from '../../styles'
import InputBlock from '../../components/LoginRegister/InputBlock'
import { LOGIN } from './graphql'
import { useMutation } from '@apollo/react-hooks'
import { useHistory, Link } from 'react-router-dom'

const Login = () => {
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
            localStorage.setItem('token', token)
        },
        onError: () => {
            alert("there has been an error line 25")
        }
    })

    if (error) {
        alert("there has been an error in logging u in line 30")
    }

    const handleLogin = (event) => {
        login()
        history.push('/')
    }


    return (
        <Container>
        <StyledForm onSubmit={ login }>
            <h1>Welcome back to Recipe Central</h1>
            <p>{errorMessage} </p>
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