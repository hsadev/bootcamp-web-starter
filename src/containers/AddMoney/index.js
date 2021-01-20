import React, { useState } from 'react'

const AddMoney = () => {
  const [money, setMoney] = useState('')
  
  const handleChange = e => {
    e.target.value === '' ? setMoney('') : setMoney(Math.max(0, Math.min(10000, Number(e.target.value))))
  }
  
  return (
    <div>
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
        <button type='button'>Add</button>
      </div>
    </div>
  )
}

export default AddMoney