import React, {useState} from 'react'
import {Container, LoginRegisterButton, StyledForm} from '../../styles'
import InputBlock from '../../components/LoginRegister/InputBlock'
import { LOGIN } from '../graphql'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
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
            history.push('/')
        },
        //onError 
    })




    return (
        <Container>
        <StyledForm onSubmit={ login } maxheight="400px">
            <h1>Welcome back to Recipe Central</h1>
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
            <LoginRegisterButton disabled={ !buttonEnabled } onClick={ login }>Log In</LoginRegisterButton>
        </StyledForm>
            {error ? <p>There was an error</p> : <p></p>}
        </Container>
    )
}

export default Login