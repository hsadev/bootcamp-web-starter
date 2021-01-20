import React from 'react'

const PassInput = ({ value, setValue, placeholder }) => {

  return (
    <input 
      type='password' 
      value={value} 
      onChange={e => setValue(e.target.value)} 
      placeholder={placeholder}
    />
  )
}

export default PassInput