import React from 'react'
import { Link } from 'react-router-dom' 

const UserInfo = () => {

  return (
    <div>
      <div>
        <p>Username: </p>
        <p>Account Balance:</p>
      </div>
      <div>
        <Link to='/change-password'>
          <button type='button'>Change Password</button>
        </Link>
        <Link to='/add-money'>
          <button type='button'>Add Money to Balance</button>
        </Link>
      </div>
    </div>
  )
}

export default UserInfo