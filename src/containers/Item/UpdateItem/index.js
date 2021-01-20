import React, { useReducer } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetails from '../components/ItemDetails'
import Photo from '../components/Photo'

const UpdateItem = () => {
  const itemId = useParams().id
  
  const reducer = (prevState, payload) => ({ ...prevState, ...payload })
  const [form, setForm] = useReducer(reducer, {
    description: '',
    name: '',
    price: '',
    stock: '',
    tag: '',
    tags: [],
  })
  
  return (
    <div>
      <h1>Update Item Details</h1>
      <Photo />
      <ItemDetails 
        value={form} 
        setValue={setForm}
        msg='Update Item Listing' 
      />
    </div>
  )
}

export default UpdateItem