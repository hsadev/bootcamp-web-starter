import React from 'react'
import ReactTextTransition, { presets } from 'react-text-transition'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

const Logout = () => (
  <div>
    <ReactTextTransition
      text="bruh "
      spring={presets.molasses}
      className="big"
      delay={800}
      inline
    />
        you just logged out. you fool.
  </div>
)

export default Logout
