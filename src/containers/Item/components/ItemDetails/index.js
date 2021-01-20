import React from 'react'

import DetailInput from './components/DetailInput'

const ItemDetails = ({ value, setValue, msg, action }) => {
  const addTag = e => {
    if (e.key === 'Enter' && e.target.value) {
      setValue({ 
        'tags': value.tags.concat(value.tag), 
        'tag': '', 
      })
    }
  }
  return (
    <div>
      <DetailInput 
        name='name' 
        value={value} 
        setValue={setValue} 
        placeholder='item name'
      />
      <br />
      <DetailInput 
        name='description' 
        value={value} 
        setValue={setValue} 
        placeholder='item description'
      />
      <br />
      <DetailInput 
        name='stock' 
        type='number'
        min='1'
        max='1000'
        label='Number of items to sell '
        value={value} 
        setValue={setValue}
        placeholder='stock' 
      />
      <br />
      <DetailInput 
        name='price' 
        type='number'
        min='0'
        max='10000'
        label='Price of one item '
        value={value} 
        setValue={setValue} 
        placeholder='price'
      />
      <br />
      <input 
        value={value.tag} 
        onChange={e => setValue({ 'tag': e.target.value })} 
        onKeyPress={addTag}
        placeholder='Add tags!'
      />
      {value.tags.map((tag, i) => {
        return <p key={i}>{tag}</p>
      })}
      <br />
      <button type='button' onClick={action}>{msg}</button>
    </div>
  )
}

export default ItemDetails