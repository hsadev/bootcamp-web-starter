/* eslint-disable react/no-array-index-key */
import React from 'react'

const Transaction = ({ transactions }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Seller</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        { transactions && transactions.map((trans, i) => (
          <tr key={i}>
            <td>{trans.item.name}</td>
            <td>{trans.item.seller.username}</td>
            <td>{trans.item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Transaction
