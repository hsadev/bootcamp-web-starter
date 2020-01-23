// allows the user to search for friends
import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Input } from '../../../../UI/Input'
import { AddFriendsContainer, AddFriendTitle } from './styles'
import { SEARCH_USERS } from './graphql'
import UserResult from './UserResult'

const AddFriend = () => {
  // use the state hook to keep track of the current person the user is typing
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const { loading, error } = useQuery(SEARCH_USERS, {
    variables: {
      searchText,
    },
    onCompleted: data => {
      setSearchResults(data.searchUsers)
    },
  })

  if (error) return 'Error!'

  return (
    <AddFriendsContainer>
      <AddFriendTitle>Add Friend</AddFriendTitle>
      <Input
        value={searchText}
        placeholder="Search by name to request"
        onChange={e => {
          setSearchText(e.target.value)
        }}
      />
      {
        searchResults.map(el => (
          <UserResult key={el.id} firstName={el.firstName} lastName={el.lastName} userId={el.id} />
        ))
      }
    </AddFriendsContainer>
  )
}


export default AddFriend
