import React, { useState } from 'react'
import { List, ListItem } from '../../styles'

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente itaque nostrum consequuntur, maxime laborum facilis repudiandae architecto facere, cum accusamus doloribus alias vel quidem modi saepe hic! Veniam laboriosam commodi aliquid ipsa unde consequuntur consequatur, at accusantium atque nobis eum. Vero quos fuga corporis cum libero perferendis cumque dolor nobis!',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quos error repellat sunt, id omnis optio unde suscipit facilis beatae?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem fuga non, dolorem officia facilis, minus culpa aspernatur excepturi, aut fugiat saepe nostrum. Natus voluptatem nesciunt expedita enim, quae eos!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, atque aspernatur est, architecto facilis, nobis alias nam neque amet nemo eveniet exercitationem error! Optio aliquam earum porro, facere iure pariatur temporibus quisquam a laudantium minima consequatur distinctio tempore eveniet ipsum!',
  ])

  return (
    <>
      <h2>Ingredients</h2>
      <List>
        {ingredients.map(ingredient => (
          <ListItem>{ingredient}</ListItem>
        ))}
      </List>
    </>
  )
}

export default Ingredients
