import React from 'react'

import UserInfo from './components/UserInfo'
import Transaction from './components/Transaction'
import Shop from './components/Shop'

const Account = () => {

  return (
    <div>
      <h1>My Account</h1>
      <UserInfo />
      <h2>Transaction History</h2>
      <Transaction />
      <h2>My Shop</h2>
      <Shop />
    </div>
  )
}

export default Account