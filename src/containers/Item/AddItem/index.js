import React, { useReducer } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_ITEM } from './graphql'

import ItemDetails from '../components/ItemDetails'
import Photo from '../components/Photo'

const AddItem = () => {
  const reducer = (prevState, payload) => ({ ...prevState, ...payload })
  const [form, setForm] = useReducer(reducer, {
    description: '',
    img: '',
    name: '',
    price: '',
    stock: '',
    tag: '',
    tags: [],
  })

  const [createItem] = useMutation(CREATE_ITEM, {
    variables: {
      input: {
        name: form.name,
        sellerId: 'placeholder',
        imgUrl: form.img,
        description: form.description,
        price: form.price,
        stock: form.stock,
        tags: form.tags,
      },
    }
  })
  
  return (
    <div>
      <h1>Add Item to Shop</h1>
      <Photo />
      <ItemDetails 
        value={form} 
        setValue={setForm}
        msg='Post Item Listing' 
        action={createItem}
      />
    </div>
  )
}

export default AddItem