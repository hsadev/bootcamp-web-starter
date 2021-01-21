import React from 'react'
import { ListContainer, List, ListItem } from './styles'

const SearchResults = ({ results }) => (
  <>
    <ListContainer>
      <List>
        {results.map(({ label, url }) => (
          <ListItem key={url}>{label}</ListItem>
        ))}
      </List>
    </ListContainer>
  </>
)

export default SearchResults
