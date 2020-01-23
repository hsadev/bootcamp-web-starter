import styled from 'styled-components'

export const FriendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  width: 250px;
  height: 70px;
  padding: 15px;
`

export const Name = styled.p`
  font-family: ${({ theme }) => theme.fonts.family};
  color: ${({ theme }) => theme.colors.offBlack};
  font-size: 20px;
  margin: 0;
  font-weight: bold;
`

export const Email = styled.p`
  font-family: ${({ theme }) => theme.fonts.family};
  color: gray;
  font-size: 15px;
`
