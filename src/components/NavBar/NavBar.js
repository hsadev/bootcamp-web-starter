import React from 'react'
import { Links, LogoutBtn, NavbarContainer, Tab, Title } from './styles'
import { useHistory } from 'react-router-dom'

const NavBar = () => {
    const history = useHistory()
    return (
        <NavbarContainer>
            <Title to='/'>Recipe Central</Title>
            <Links>
                <Tab to='/'>Search</Tab>
                <Tab to='/favorites'>Favorites</Tab>
                <Tab to='/history'>History</Tab>
                <LogoutBtn onClick={ () => {
                    history.push('/login')
                }}>Logout</LogoutBtn>
            </Links>
        </NavbarContainer>
    )
}

export default NavBar