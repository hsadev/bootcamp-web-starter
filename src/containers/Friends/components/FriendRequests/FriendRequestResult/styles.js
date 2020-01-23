import styled from 'styled-components'

export const FriendRequestResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 300px;
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

export const AcceptButton = styled.span`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  line-height: 50px;
  text-align: center;
  transition: all 0.25s;
  cursor: pointer;
  font-size: 35px;
  
  &:hover {
    box-shadow: 0 2px 5px ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`

export const RejectButton = styled.span`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.red};
  color: white;
  line-height: 50px;
  text-align: center;
  transition: all 0.25s;
  cursor: pointer;
  font-size: 35px;
  
  &:hover {
    box-shadow: 0 2px 5px ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.lightRed};
  }
`
