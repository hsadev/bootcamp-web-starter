import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { ADD_MONEY } from './graphql'

const AddMoney = () => {
  const [money, setMoney] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  
  // UPDATE PLACEHOLDER W/ TOKEN USERID EVENTUALLY
  const [addMoney] = useMutation(ADD_MONEY, {
    variables: {id: 'placeholder', money},
    onError: () => setErrorMsg('could not add funds'),
    onCompleted: () => {
      alert(`$${money} added to balance`)
      setMoney('')
    }
  })

  const handleChange = e => {
    e.target.value === '' ? setMoney('') : setMoney(Math.max(0, Math.min(10000, Number(e.target.value))))
  }

  return (
    <div>
      {errorMsg !== '' && <div>{errorMsg}</div>}
      <div>
        <p>Enter Amount (in USD):</p>
        <label htmlFor="money">$</label> 
        <input 
          id='money' 
          type='number'
          min='0'
          max='100000'
          placeholder='0.00' 
          value={money} 
          onChange={handleChange}
        />
        <br />
        <button type='button' onClick={addMoney}>Add to Balance</button>
      </div>
    </div>
  )
}

export default AddMoney