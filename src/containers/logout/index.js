import React from 'react'
<<<<<<< HEAD
import ReactTextTransition, { presets } from "react-text-transition";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Logout = () => {
  return (
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
}
=======
import ReactTextTransition, { presets } from 'react-text-transition'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'


const Logout = () => (
  <Container>
    <Row>
      <Col>
        <div>
            bruh1
        </div>
      </Col>
      <Col>
        <div>
            bruh2
        </div>
      </Col>
    </Row>
  </Container>
)
>>>>>>> 0367934... finished login and register

export default Logout
