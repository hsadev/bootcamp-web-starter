import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ListContainer, List, ListItem } from './styles'

const API_KEY = '5dc246545b634cc48af9fb7a2a5e609a'

const SearchResults = ({ results }) => {
  const history = useHistory()
  const [error, setError] = useState(false)

  const getRecipe = url => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.spoonacular.com/recipes/extract?url=${url}&apiKey=${API_KEY}`)
        const data = await res.json()

        if (data.status !== 'failure') {
          history.push(`/recipe/${data.id}`)
        } else {
          setError(true)
        }
      } catch (err) {
        return 'error'
      }
    }
    fetchData()
  }

  if (error) {
    return (
      <>
        <h1>THIS IS AN ERROR PAGE</h1>
        <p>Unfortunately, because we are referencing multiple APIs, some recipes that may show up on the search results do not have recipe details available.</p>
      </>
    )
  }

  return (
    <>
      <ListContainer>
        <List>
          {results.map(({ label, url, uri }) => (
            <ListItem key={uri} onClick={() => getRecipe(url)}>{label}</ListItem>
          ))}
        </List>
      </ListContainer>
    </>
  )
}

export default SearchResults
