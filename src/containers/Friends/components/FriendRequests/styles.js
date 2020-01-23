import styled from 'styled-components'

export const FriendRequestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  margin: 20px;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 2px 7px gray;
  padding: 20px;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: bold;
`
