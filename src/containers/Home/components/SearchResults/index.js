import React, { useState } from 'react'
import { ListContainer, List, ListItem } from './styles'

const SearchResults = () => {
  const [results, setResults] = useState([
    'placeholder 1',
    'placeholder 2',
    'placeholder 3',
  ])

  return (
    <>
      <h2>Search Results</h2>
      <ListContainer>
        <List>
          {results.map(result => (
            <ListItem>{result}</ListItem>
          ))}
        </List>
      </ListContainer>
    </>
  )
}

export default SearchResults
