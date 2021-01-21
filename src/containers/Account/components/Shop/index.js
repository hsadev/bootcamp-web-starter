/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { REMOVE_ITEM } from './graphql'


const Shop = ({ items, refetch }) => {
  const history = useHistory()
  const [id, setId] = useState('')
  const [msg, setMsg] = useState('')
  const [confirm, setConfirm] = useState(false)

  const [deleteItem] = useMutation(REMOVE_ITEM, {
    variables: { id },
    onError: error => setMsg(error),
    onCompleted: () => {
      refetch()
      setConfirm(false)
      setMsg('')
    },
  })

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          { items && items.map(item => {
            if (!item.deleted) {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.stock}</td>
                  <td>
                    <button type="button" onClick={() => history.push(`/update-item/${item.id}`)}>
                  Update
                    </button>
                  </td>
                  <td>
                    <button type="button" onClick={() => { setId(item.id); setMsg('are you sure you want to remove this item?'); setConfirm(true) }}>
                  x
                    </button>
                  </td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
      <div>
        <button type="button" onClick={() => history.push('/add-item')}>Add Item</button>
      </div>
      { msg !== '' && <p>{msg}</p>}
      { confirm && <button type="button" onClick={() => deleteItem()}>DELETE ITEM</button>}
    </div>
  )
}

export default Shop
