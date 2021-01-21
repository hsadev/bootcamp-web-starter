import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { USER } from './graphql'

import UserInfo from './components/UserInfo'
import Transaction from './components/Transaction'
import Shop from './components/Shop'

const Account = () => {
  const {
    data, loading, error, refetch,
  } = useQuery(USER, {
    variables: { id: 'bc420ebb-a6f1-4492-9fe6-6b2786e8a350' },
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
      <Shop items={itemsSelling} refetch={refetch} transactions={transactions} />
    </div>
  )
}

export default Account
