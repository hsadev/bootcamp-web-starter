import React, { useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { UPDATE_ITEM, SPECIFIC_ITEM } from './graphql'

import ItemDetails from '../components/ItemDetails'
import Photo from '../components/Photo'


const UpdateItem = () => {
  const itemId = useParams().id
  const history = useHistory()
  const reducer = (prevState, payload) => ({ ...prevState, ...payload })
  const [form, setForm] = useReducer(reducer, {
    description: '',
    name: '',
    imgUrl: '',
    price: '',
    stock: '',
    tag: '',
    tags: [],
    errorMsg: '',
  })
  // necessary to strip __typename field
  const getTags = tags => {
    const tagList = []
    tags.map(({ tag }) => tagList.push({ tag }))
    return tagList
  }
  const [updateItem] = useMutation(UPDATE_ITEM, {
    variables: {
      id: itemId,
      input: {
        name: form.name,
        sellerId: 'bc420ebb-a6f1-4492-9fe6-6b2786e8a350',
        imgUrl: form.imgUrl,
        description: form.description,
        price: form.price,
        stock: form.stock,
        tags: [{ tag: 'hello' }, { tag: 'hey' }],
      },
    },
    onError: () => setForm({ errorMsg: 'Could not update listing. Please try again.' }),
    onCompleted: () => history.push('/account'),
  })

  const { loading, error } = useQuery(SPECIFIC_ITEM, {
    variables: { id: itemId },
    onCompleted: data => {
      const {
        item: {
          name,
          imgUrl,
          description,
          price,
          stock,
          tags,
        },
      } = data
      setForm({
        description,
        name,
        imgUrl,
        price,
        stock,
        tags: getTags(tags),
      })
    },
  })

  if (loading) return 'Loading...'
  if (error) return 'There was an error.'

  return (
    <div>
      { form.errorMsg !== '' && <div>{form.errorMsg}</div> }
      <h1>Update Item Details</h1>
      <Photo value={form.imgUrl} setValue={setForm} />
      <ItemDetails
        value={form}
        setValue={setForm}
      />
      <button type="button" onClick={updateItem}>Update Item Listing</button>
    </div>
  )
}

export default UpdateItem
