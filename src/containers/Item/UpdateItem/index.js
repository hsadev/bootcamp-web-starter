import React, { useReducer } from 'react'
// import { useParams } from 'react-router-dom'
import { UPDATE_ITEM, SPECIFIC_ITEM } from './graphql'
import { useMutation, useQuery } from '@apollo/react-hooks'

import ItemDetails from '../components/ItemDetails'
import Photo from '../components/Photo'


const UpdateItem = () => {
  // const itemId = useParams()

  const reducer = (prevState, payload) => ({ ...prevState, ...payload })
  const [form, setForm] = useReducer(reducer, {
    description: '',
    name: '',
    img: '',
    price: '',
    stock: '',
    tag: '',
    tags: [],
  })

  const [updateItem] = useMutation(UPDATE_ITEM, {
    variables: {
      input: {
        name: form.name,
        sellerId: 'placeholder',
        imgUrl: form.img,
        description: form.description,
        price: form.price,
        stock: form.stock,
        // tags: form.tags,
      },
    }
  })

  const { loading, error } = useQuery(SPECIFIC_ITEM, {
    variables: {id: '096919eb-b156-48fc-aace-eab131c2e777'},
    onCompleted: data => {
      const { item: {name, imgUrl, description, price, stock}} = data
      setForm({
        'description': description,
        'name': name,
        'img': imgUrl,
        'price': `${price}`,
        'stock': `${stock}`,
        //'tags': tags,
      })
    }
  })

  if (loading) return 'Loading...'
  if (error) return 'There was an error.'
  
  return (
    <div>
      <h1>Update Item Details</h1>
      <Photo />
      <ItemDetails 
        value={form} 
        setValue={setForm}
        msg='Update Item Listing' 
        action={updateItem}
      />
    </div>
  )
}

export default UpdateItem