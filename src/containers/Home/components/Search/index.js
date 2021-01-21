import React, { useState, useRef } from 'react'
import {
  Title,
  Subtitle,
  Label,
  Input,
  Button,
  SearchPanel
} from './styles'

export const SearchBar = ({ setQuery }) => (
  <>
    <Title>RECIPE SEARCH</Title>
    <SearchPanel>
      <Label>Keywords</Label>
      <Input onChange={e => setQuery(e.target.value)} />
    </SearchPanel>
  </>
)

export const IngredientAdder = ({ addIngredient }) => {
  const [ing, setIng] = useState('')

  return (
    <>
      <Subtitle>ADD INGREDIENTS</Subtitle>
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
