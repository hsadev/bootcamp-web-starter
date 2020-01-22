import React from 'react'
import { ButtonStyle } from './ButtonStyle'

// eslint-disable-next-line react/prop-types
const Button = ({ text, onClick }) => (
  <ButtonStyle onClick={onClick}>
    <nav>
      {text}
      <span />
      <span />
      <span />
      <span />
    </nav>
  </ButtonStyle>
)

export default Button
