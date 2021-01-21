import React from 'react'
import { UList, ListItem } from '../../styles'

const Ingredients = ({ ingredients }) => (
  <>
    <h2>Ingredients</h2>
    <UList>
      {ingredients.map(({ id, originalString }) => (
        <ListItem key={id}>{originalString}</ListItem>
      ))}
    </UList>
  </>
)

export default Ingredients
