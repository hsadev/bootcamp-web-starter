import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { CHANGE_PASS } from './graphql'

import PassInput from './components/PassInput'

const ChangePassword = () => {
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [msg, setMsg] = useState('')


  // UPDATE PLACEHOLDER W/ TOKEN USERID EVENTUALLY
  const [changePassword] = useMutation(CHANGE_PASS, {
    variables: { id: '04b9f2f0-ea2c-472e-8e04-f43db84dba16', password: newPass },
    onCompleted: () => {
      setMsg('password updated!')
      setNewPass('')
      setConfirmPass('')
    },
    onError: () => setMsg('could not change password'),
  })

  const handleSubmit = async () => {
    if (newPass !== confirmPass) {
      setMsg('passwords do not match')
    } else {
      changePassword()
    }
  }

  return (
    <div>
      {msg !== '' && <div>{msg}</div>}
      <div>
        <p>Change Password:</p>
        <PassInput
          value={newPass}
          setValue={setNewPass}
          placeholder="New Password"
        />
        <br />
        <PassInput
          value={confirmPass}
          setValue={setConfirmPass}
          placeholder="Confirm New Password"
        />
        {confirmPass !== newPass && confirmPass !== '' && <p>passwords do not match!</p>}
        <br />
        <button type="button" onClick={handleSubmit}>Change</button>
      </div>
    </div>
  )
}

export default ChangePassword
