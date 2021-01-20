import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.div ` 
    width: 100vw;
    background-color: #a23e48;
    font-family: sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px;
`

export const Title = styled(Link) `
    font-size: 2em;
    padding-left: 30px;
    text-decoration: none;
    color: white;
    font-weight: bold;

    :hover {
        opacity: 0.7;
    }
`

export const Links = styled.div ` 
    display: flex;
    flex-direction: row;
    width: 480px;
    justify-content: space-between;
    padding-right: 50px;
    color: white;
    text-decoration: none;
`

export const Tab = styled(Link) ` 
    color: white;
    text-decoration: none;
    font-size: 1.3em;
    width: 120px;
    display: grid;
    place-items: center;
    height: 40px;

    :hover {
        opacity: 0.7;
    }
`

export const LogoutBtn = styled.button ` 
    color: white;
    text-decoration: none;
    font-size: 1.3em;
    width: 120px;
    display: grid;
    place-items: center;
    height: 40px;
    background-color: transparent;
    border: none;

    :hover {
        opacity: 0.7;
    }
`