import React from 'react'

const Photo = ({ value, setValue }) => (
  <div>
    <h2>Current photo</h2>
    <img src={value} alt="(your item)" width="250" height="300" />
    <h2>Choose a photo (optional)</h2>
    <input
      value={value}
      onChange={e => setValue({ imgUrl: e.target.value })}
      placeholder="please enter a valid photo url"
    />
  </div>
)

export default Photo
