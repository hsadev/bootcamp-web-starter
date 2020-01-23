import React from 'react'
import { FriendContainer, Name, Email } from './styles'

// eslint-disable-next-line react/prop-types
const Friend = ({ firstName, lastName, email }) => (
  <FriendContainer>
    <Name>{`${firstName} ${lastName}`}</Name>
    <Email>{email}</Email>
  </FriendContainer>
)

export default Friend
