import React, { useState, useRef } from 'react'
import { Input, Button, SearchPanel } from './styles'

const SearchBar = ({ setQuery }) => (
  <>
    <h1>Search for recipe by title:</h1>
    <SearchPanel>
      <Input onChange={e => setQuery(e.target.value)} />
    </SearchPanel>
  </>
)

const IngredientAdder = ({ addIngredient }) => {
  const [ing, setIng] = useState('')

  return (
    <>
      <h1>add ing</h1>
      <SearchPanel>
        <Input onChange={e => setIng(e.target.value)} />
        <Button onClick={() => addIngredient(ing)}>add</Button>
      </SearchPanel>
    </>
  )
}

const IngredientList = ({ ingredients }) => (
  <>
    {ingredients.map(ingredient => <p key={ingredient}>{ingredient}</p>)}
  </>
)

const Search = ({ setUrl }) => {
  const [query, setQuery] = useState('')
  const [ingredients, setIngredients] = useState([])

  const addIngredient = ing => {
    setIngredients([...ingredients, ing])
  }

  const processSubmit = () => {
    let link = 'http://www.recipepuppy.com/api/?'

    if (ingredients.length > 0) {
      link += `i=${ingredients.join()}`
    }
    if (ingredients.length > 0 && query) {
      link += '&'
    }
    if (query) {
      link += `q=${query}`
    }
    // console.log(link)
    setUrl(link)
  }

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <IngredientAdder addIngredient={addIngredient} />
      <IngredientList ingredients={ingredients} />
      <Button onClick={processSubmit}>Submit</Button>
    </>
  )
}

export default Search
