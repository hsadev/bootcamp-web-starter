/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { ADD_MONEY } from './graphql'

const AddMoney = () => {
  const [money, setMoney] = useState('')
  const [msg, setMsg] = useState('')
  // UPDATE PLACEHOLDER W/ TOKEN USERID EVENTUALLY
  const [addMoney] = useMutation(ADD_MONEY, {
    variables: { id: '04b9f2f0-ea2c-472e-8e04-f43db84dba16', money },
    onError: () => setMsg('could not add funds'),
    onCompleted: () => {
      setMsg(`$${money} added to balance`)
      setMoney('')
    },
  })

  const handleChange = e => {
    if (e.target.value === '') {
      setMoney('')
      return
    }
    setMoney(Math.max(0, Math.min(10000, Number(e.target.value))))
  }

  return (
    <div>
      {msg !== '' && <div>{msg}</div>}
      <div>
        <p>Enter Amount (in USD):</p>
        <label htmlFor="money">$</label>
        <input
          id="money"
          type="number"
          min="0"
          max="100000"
          placeholder="0.00"
          value={money}
          onChange={handleChange}
        />
        <br />
        { money !== '' && <button type="button" onClick={addMoney}>Add to Balance</button> }
      </div>
    </div>
  )
}

export default AddMoney
