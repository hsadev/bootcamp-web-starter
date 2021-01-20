import React from 'react'
import { Link } from 'react-router-dom'

const Shop = () => {
  const id = 'placeholder'
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
      <div>
        <Link to='/add-item'>
          <button type='type'>Add Item</button>
        </Link>
        <button type='type'>Remove Item</button>
        <Link to={`/update-item/${id}`}>
          <button type='type'>Update Item</button>
        </Link>
      </div>
    </div>
  )
}

export default Shop