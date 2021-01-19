import React from 'react'
import { Input, Button, SearchPanel } from './styles'

const SearchBar = () => {
  return (
    <>
      <h1>Search for recipe by title:</h1>
      <SearchPanel>
        <Input />
        <Button>Search</Button>
      </SearchPanel>
    </>
  )
}

export default SearchBar
