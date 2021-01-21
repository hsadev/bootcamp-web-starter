import React from 'react'
import { UList, ListItem, Subtitle } from '../../styles'

const Ingredients = ({ ingredients }) => (
  <>
    <Subtitle>Ingredients</Subtitle>
    <UList>
      {ingredients.map(({ id, originalString }) => (
        <ListItem key={id}>{originalString}</ListItem>
      ))}
    </UList>
  </>
)

export default Ingredients
