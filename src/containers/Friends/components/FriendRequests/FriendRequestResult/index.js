import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import {
  FriendRequestResultContainer, AcceptButton, RejectButton, Name,
} from './styles'
import { RESOLVE_FRIEND_REQUEST } from './graphql'

const FriendRequestResult = ({ firstName, lastName, requestorId }) => {
  const [acceptFriendRequest] = useMutation(RESOLVE_FRIEND_REQUEST, {
    variables: {
      requestorId,
      acceptedOrDeclined: 'ACCEPTED',
    },
    onCompleted: () => {
      window.location.reload()
    },
  })

  const [declineFriendRequest] = useMutation(RESOLVE_FRIEND_REQUEST, {
    variables: {
      requestorId,
      acceptedOrDeclined: 'DECLINED',
    },
    onCompleted: () => {
      window.location.reload()
    },
  })

  if (requestorId === '') {
    return (
      <FriendRequestResultContainer>
        <Name>{`${firstName} ${lastName}`}</Name>
      </FriendRequestResultContainer>
    )
  }

  return (
    <FriendRequestResultContainer>
      <Name>{`${firstName} ${lastName}`}</Name>
      <AcceptButton onClick={acceptFriendRequest}><FontAwesomeIcon icon={faCheckCircle} /></AcceptButton>
      <RejectButton onClick={declineFriendRequest}><FontAwesomeIcon icon={faTimesCircle} /></RejectButton>
    </FriendRequestResultContainer>
  )
}

export default FriendRequestResult
