import React, { useReducer } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { CREATE_ITEM } from './graphql'

import ItemDetails from '../components/ItemDetails'
import Photo from '../components/Photo'

const AddItem = () => {
  const history = useHistory()
  const reducer = (prevState, payload) => ({ ...prevState, ...payload })
  const [form, setForm] = useReducer(reducer, {
    description: '',
    imgUrl: '',
    name: '',
    price: '',
    stock: '',
    tag: '',
    tags: [],
    errorMsg: '',
  })

  const [createItem] = useMutation(CREATE_ITEM, {
    variables: {
      input: {
        name: form.name,
        sellerId: '04b9f2f0-ea2c-472e-8e04-f43db84dba16', // placeholder ID
        imgUrl: form.imgUrl,
        description: form.description,
        price: form.price,
        stock: form.stock,
        tags: form.tags,
      },
    },
    onCompleted: () => history.push('/account'),
    onError: () => setForm({ errorMsg: 'Could not create listing. Please try again.' }),
  })

  return (
    <div>
      { form.errorMsg !== '' && <div>{form.errorMsg}</div> }
      <h1>Add Item to Shop</h1>
      <Photo value={form.imgUrl} setValue={setForm} />
      <ItemDetails value={form} setValue={setForm} />
      <button type="button" onClick={createItem}>Post Item Listing</button>
    </div>
  )
}

export default AddItem
