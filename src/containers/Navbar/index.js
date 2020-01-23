import React from 'react'
import { Container, NavLink, LoginLogoutButton } from './styles'

const Navbar = () => (
  <Container>
    <img src="./cheermeuplogo.png" alt="bruh" width="120px" />
    <br />
    <NavLink to="/" />
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/friends">Friends</NavLink>
    <NavLink to="/PositiveMessages">Positive Messages</NavLink>
    <LoginLogoutButton onClick={() => {
      localStorage.removeItem('token')
      window.location.replace('/login')
    }}
    >
      {
        localStorage.getItem('token') === null ? 'Login' : 'Logout'
      }
    </LoginLogoutButton>

  </Container>
)

export default Navbar
