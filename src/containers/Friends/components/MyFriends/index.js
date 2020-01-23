// displays the user's list of friends
import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { MY_FRIENDS } from './graphql'
import Friend from './Friend'
import { MyFriendsContainer, MyFriendsTitle } from './styles'

const MyFriends = () => {
  const { loading, error, data } = useQuery(MY_FRIENDS, {
    onCompleted: dat => {
      console.log(dat)
    },
    onError: err => {
      console.log(err)
    },
  })

  if (loading) {
    return (
      'Loading...'
    //  <LoadingIndicator />
    )
  }

  if (error) {
    return (
      'Error!'
    )
  }

  return (
    <MyFriendsContainer>
      <MyFriendsTitle>My Friends</MyFriendsTitle>
      {data.viewer.friends.map(el => (
        <Friend key={el.id} firstName={el.firstName} lastName={el.lastName} email={el.email} />
      ))}
    </MyFriendsContainer>
  )
}

export default MyFriends
