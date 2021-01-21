/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { REMOVE_ITEM } from './graphql'

import { Table, Container } from '../../styles'
import { Delete } from './styles'


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
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Stock</th>
            <th class="update"></th>
            <th class="remove"></th>
          </tr>
        </thead>
        <tbody>
          { items && items.map(item => {
            if (!item.deleted) {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{`$${item.price}`}</td>
                  <td>{item.stock}</td>
                  <td>
                    <button type="button" onClick={() => history.push(`/update-item/${item.id}`)}>
                  Update
                    </button>
                  </td>
                  <td>
                    <Delete type="button" onClick={() => { setId(item.id); setMsg('are you sure you want to remove this item?'); setConfirm(true) }}>
                  x
                    </Delete>
                  </td>
                </tr>
              )
            }
          })}
        </tbody>
      </Table>
      <button type="button" onClick={() => history.push('/add-item')}>Add Item</button>
      { msg !== '' && <p>{msg}</p>}
      { confirm && 
      <div>
        <button type="button" onClick={() => deleteItem()}>YES</button>
        <button 
          type='button' 
          onClick={() => { 
            setMsg('')
            setConfirm(false) 
          }}
        >
          NO
        </button>
      </div>
      }
    </Container>
  )
}

export default Shop
