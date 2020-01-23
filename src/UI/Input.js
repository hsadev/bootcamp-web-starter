import styled from 'styled-components'

export const Input = styled.input`
  border: 3px solid ${({ theme }) => theme.colors.purple};
  border-radius: 7px;
  background-color: white;
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.family};
  transition: all 0.2s ease-out;
  outline: none;
  margin: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightLilac};
  }

  &:focus {
    background-color: white;
    border-color: ${({ theme }) => theme.colors.orange};
  }
`
