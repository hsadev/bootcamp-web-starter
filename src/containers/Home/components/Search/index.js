import React, { useState, useRef } from 'react'
import { Input, Button, SearchPanel } from './styles'

export const SearchBar = ({ setQuery }) => (
  <>
    <h1>Search for recipe by title:</h1>
    <SearchPanel>
      <Input onChange={e => setQuery(e.target.value)} />
    </SearchPanel>
  </>
)

export const IngredientAdder = ({ addIngredient }) => {
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

export const IngredientList = ({ ingredients }) => (
  <>
    {ingredients.map(ingredient => <p key={ingredient}>{ingredient}</p>)}
  </>
)
