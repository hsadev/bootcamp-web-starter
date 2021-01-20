import React, { useReducer } from 'react'
import ItemDetails from '../components/ItemDetails'
import Photo from '../components/Photo'

const AddItem = () => {
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
      <h1>Add Item to Shop</h1>
      <Photo />
      <ItemDetails 
        value={form} 
        setValue={setForm}
        msg='Post Item Listing' 
      />
    </div>
  )
}

export default AddItem