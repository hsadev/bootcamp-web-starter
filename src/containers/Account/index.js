import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { USER } from './graphql'

import UserInfo from './components/UserInfo'
import Transaction from './components/Transaction'
import Shop from './components/Shop'

const Account = () => {
  const { data, loading, error } = useQuery(USER, {
    variables: { id: '04b9f2f0-ea2c-472e-8e04-f43db84dba16' },
  })

  if (error) return 'Unable to load account info.'
  if (loading) return 'Loading...'
  const {
    user: {
      username,
      transactions,
      itemsSelling,
      money,
    },
  } = data

  return (
    <div>
      <h1>My Account</h1>
      <UserInfo username={username} money={money} />
      <h2>Transaction History</h2>
      <Transaction transactions={transactions} />
      <h2>My Shop</h2>
      <Shop items={itemsSelling} />
    </div>
  )
}

export default Account
