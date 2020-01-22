/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useReducer } from 'react'
import { useMutation } from '@apollo/react-hooks'
import {
  RegisterContainer, RegisterError, Logo, RegisterTitle, LoginButton, HorizontalContainer,
} from './styles'
import { Input } from '../../UI/Input'
import Button from '../../UI/Button'
import { REGISTER } from './graphql'

const Register = () => {
  const registerReducer = (prevState, payload) => ({ ...prevState, ...payload })

  const [registerForm, setRegisterForm] = useReducer(registerReducer, {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
  })

  const [register, { error }] = useMutation(REGISTER, {
    variables: {
      input: registerForm,
    },
    onCompleted: ({ register: { token } }) => {
      localStorage.setItem('token', token)
      window.location.replace('/home')
    },
    onError: err => console.log(err),
  })

  if (error) {
    console.log(error)
  }

  return (
    <RegisterContainer>
      <Logo alt="logo" src="./cheermeuplogo.png" />
      <RegisterTitle>Register</RegisterTitle>
      <HorizontalContainer>
        <Input
          placeholder="First name"
          value={registerForm.firstName}
          onChange={e => {
            setRegisterForm({ firstName: e.target.value })
          }}
        />
        <Input
          placeholder="Last name"
          value={registerForm.lastName}
          onChange={e => {
            setRegisterForm({ lastName: e.target.value })
          }}
        />
      </HorizontalContainer>

      <Input
        placeholder="Email"
        value={registerForm.email}
        onChange={e => {
          setRegisterForm({ email: e.target.value.trim() })
        }}
      />
      <Input
        placeholder="Password"
        value={registerForm.password}
        onChange={e => {
          setRegisterForm({ password: e.target.value })
        }}
      />
      <Input
        placeholder="Date of birth"
        value={registerForm.dob}
        onChange={e => {
          setRegisterForm({ dob: e.target.value })
        }}
      />
      <Button
        text="Register"
        onClick={register}
      />
      {error && (
      <RegisterError>
        {error.graphQLErrors !== null && error.graphQLErrors.length > 0 ? error.graphQLErrors[0].message : error.message}
      </RegisterError>
      )}

      <LoginButton onClick={() => {
        window.location.href = '/login'
      }}
      >
        Already have an account? Login.
      </LoginButton>
    </RegisterContainer>
  )
}

export default Register
