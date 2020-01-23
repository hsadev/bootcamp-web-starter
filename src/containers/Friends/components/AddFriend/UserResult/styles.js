import styled from 'styled-components'

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 400px;
  height: 70px;
  margin: 10px;
  border-radius: 7px;
  padding: 10px;
  border: 3px solid ${({ theme }) => theme.colors.lilac};
`

export const Name = styled.p`
  font-family: ${({ theme }) => theme.fonts.family};
  color: ${({ theme }) => theme.colors.offBlack};
  font-size: 20px;
  margin: 0;
  font-weight: bold;
`

export const Confirmation = styled.p`
  border: 3px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.family};
  padding: 10px;
  border-radius: 7px;
  font-size: 16px;
  text-align: center;
  position: relative;
  margin: 10px;
  font-weight: bold;
`
