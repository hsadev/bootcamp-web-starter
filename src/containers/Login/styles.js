import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.lightLilac};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginError = styled.p`
  font-family: monospace;
  color: red;
`

export const LoginTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.purple};
  margin: 20px;
`

export const Logo = styled.img`
  width: 200px;
  height: auto;
  margin: 30px;
`
export const RegisterButton = styled.p`
  color: ${({ theme }) => theme.colors.lilac};
  font-family: ${({ theme }) => theme.fonts.family};
  padding: 0px;
  margin: 10px;
  cursor: pointer;

  transition: all 0.25s;

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`
