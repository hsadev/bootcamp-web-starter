import styled from 'styled-components'


export const BigText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 150px;
  font-color: ${({ theme }) => theme.fonts.header.accent};
  margin: auto;
`


export const BigText2 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 70px;
  font-color: ${({ theme }) => theme.fonts.header.accent};
  margin: auto;
`

export const BigText3 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 33px;
  font-color: ${({ theme }) => theme.fonts.header.accent};
  margin: auto;
`
