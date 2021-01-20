import React, { useState } from 'react'

import PassInput from './components/PassInput'

const ChangePassword = () => {
  const [currentPass, setCurrentPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('') 

  return (
    <div>
      <div>
        <p>Change Password:</p>
        <PassInput 
          value={currentPass} 
          setValue={setCurrentPass}
          placeholder='Current Password'
        />
        <br />
        <PassInput 
          value={newPass} 
          setValue={setNewPass} 
          placeholder='New Password'
        />
        <br />
        <PassInput 
          value={confirmPass} 
          setValue={setConfirmPass} 
          placeholder='Confirm New Password' 
        />
        <br />
        <button type='button'>Change</button>
      </div>
    </div>
  )
}

export default ChangePassword