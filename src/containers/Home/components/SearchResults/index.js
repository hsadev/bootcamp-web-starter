import React from 'react'
import { useHistory } from 'react-router-dom'
import { ListContainer, List, ListItem } from './styles'

const API_KEY = '5dc246545b634cc48af9fb7a2a5e609a'

const SearchResults = ({ results }) => {
  const history = useHistory()

  const getRecipe = url => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.spoonacular.com/recipes/extract?url=${url}&apiKey=${API_KEY}`)
        const data = await res.json()
        // console.log(data)
        history.push(`/recipe/${data.id}`)
      } catch (error) {
        return <p>{error}</p>
      }
    }
    fetchData()
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
