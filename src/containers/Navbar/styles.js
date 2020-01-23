import styled from 'styled-components'
import { NavLink as link } from 'react-router-dom'

export const Container = styled.div`
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.lilac};
`

export const NavLink = styled(link).attrs(({ theme }) => ({
  activeStyle: {
    color: theme.colors.yellowOrange,
  },
  exact: true,
}))`
  &:active { color: ${({ theme }) => theme.colors.orange} }
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.fonts.header};
  margin: 0 40px;
  text-decoration: none;
  transition: all 0.2s;
  
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.yellowOrange};
  }
`

export const LoginLogoutButton = styled.p`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  color: ${({ theme }) => theme.colors.purple};
  margin: 0 40px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.yellowOrange};
  }
`
