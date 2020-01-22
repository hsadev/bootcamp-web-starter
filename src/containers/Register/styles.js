import styled from 'styled-components'

export const RegisterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightLilac};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const RegisterError = styled.p`
  font-family: monospace;
  color: red;
`

export const RegisterTitle = styled.h1`
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

export const LoginButton = styled.p`
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
