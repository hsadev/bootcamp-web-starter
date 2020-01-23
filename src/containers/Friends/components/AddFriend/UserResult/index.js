/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { UserContainer, Name, Confirmation } from './styles'
import { SEND_FRIEND_REQUEST } from './graphql'
import Button from '../../../../../UI/Button'

const UserResult = ({ firstName, lastName, userId }) => {
  const [requestSent, setRequestSent] = useState(false)
  const [addFriend] = useMutation(SEND_FRIEND_REQUEST, {
    variables: {
      requesteeId: userId,
    },
    onCompleted: () => {
      setRequestSent(true)
    },
  })

  if (requestSent) {
    return (
      <UserContainer>
        <Name>{`${firstName} ${lastName}`}</Name>
        <Confirmation>Request Sent</Confirmation>
      </UserContainer>
    )
  }

  return (
    <UserContainer>
      <Name>{`${firstName} ${lastName}`}</Name>
      <Button text="Request" onClick={addFriend} />
    </UserContainer>
  )
}

export default UserResult
