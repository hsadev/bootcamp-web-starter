import { useMutation, useQuery } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { GET_PASS, CHANGE_PASS } from './graphql'

import PassInput from './components/PassInput'

const ChangePassword = () => {
  const [currentPass, setCurrentPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('') 
  const [errorMsg, setErrorMsg] = useState('')

  const { loading, data, error } = useQuery(GET_PASS, {
    variables: { id: 'placeholder' }
  })

  // UPDATE PLACEHOLDER W/ TOKEN USERID EVENTUALLY
  const [changePassword] = useMutation(CHANGE_PASS, {
    variables: {id: 'placeholder', password: newPass},
    onCompleted: () => {
      alert('password updated!')
      setErrorMsg('')
    },
    onError: () => setErrorMsg('could not change password'),
  })

  const handleSubmit = async () => {
    if (error || loading) {
      setErrorMsg('could not change password')
      return
    }
    else if (data.password !== currentPass) {
      setErrorMsg('current password incorrect')
      return
    }
    else if (newPass !== confirmPass) {
      setErrorMsg('passwords do not match')
      return
    }
    else {
      changePassword()
    }
  }

  return (
    <div>
      {errorMsg !== '' && <div>{errorMsg}</div>}
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
        {confirmPass !== newPass && confirmPass !== '' && <p>passwords do not match!</p>}
        <br />
        <button type='button' onClick={handleSubmit}>Change</button>
      </div>
    </div>
  )
}

export default ChangePassword