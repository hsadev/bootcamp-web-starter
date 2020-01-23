import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { FriendRequestsContainer, Title } from './styles'
import FriendRequestResult from './FriendRequestResult'
import { FRIEND_REQUESTS } from './graphql'

const FriendRequests = () => {
  const { loading, error, data } = useQuery(FRIEND_REQUESTS, {
    onError: err => console.log(err),
  })

  if (loading) {
    return (
      <FriendRequestsContainer>
        <Title>FriendRequests</Title>
        <FriendRequestResult firstName="loading" lastName="" requestorId="" />
      </FriendRequestsContainer>
    )
  }

  if (error) {
    return (
      <FriendRequestsContainer>
        <Title>Friend Requests</Title>
        <FriendRequestResult firstName="Error" lastName="" requestorId="" />
      </FriendRequestsContainer>
    )
  }

  if (data.viewer.friendRequests.length === 0) {
    return (
      <FriendRequestsContainer>
        <Title>Friend Requests</Title>
        <FriendRequestResult firstName="No friend requests" lastName="" requestorId="" />
      </FriendRequestsContainer>
    )
  }

  return (
    <FriendRequestsContainer>
      <Title>Friend Requests</Title>
      {
        data.viewer.friendRequests.map(el => (
          <FriendRequestResult key={el.id} firstName={el.firstName} lastName={el.lastName} requestorId={el.id} />
        ))
      }
    </FriendRequestsContainer>
  )
}

export default FriendRequests
