import React from 'react'
import MyFriends from './components/MyFriends'
import { FriendsContainer } from './styles'
import AddFriend from './components/AddFriend'
import FriendRequests from './components/FriendRequests'

const Friends = () => (
  <FriendsContainer>
    <MyFriends />
    <AddFriend />
    <FriendRequests />
  </FriendsContainer>
)

export default Friends
