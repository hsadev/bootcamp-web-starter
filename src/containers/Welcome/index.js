import React from 'react'
import ReactTextTransition, { presets } from 'react-text-transition'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Show } from './styles'
import Button from '../../UI/Button'
import { BigText, BigText2 } from '../../UI/bigtext'


const Welcome = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <br />
          <br />
        </Col>
      </Row>
      <Row>
        <BigText>
          <ReactTextTransition
            text="Welcome "
            spring={presets.molasses}
            className="big"
            delay={800}
            inline
            overflow
          />
        </BigText>
      </Row>
      <Row>
        <Col />
        <Col>
          <BigText2>
            <ReactTextTransition
              text="to your happy place"
              spring={presets.molasses}
              className="medium"
              delay={1700}
              direction="down"
              overflow
            />
          </BigText2>
        </Col>
        <Col>
          <br />
          <br />
          <br />
          <br />
          <Show>
            <Button
              id="mybutton"
              text="Cheer me up!"
              onClick={() => {
                if (localStorage.getItem('token') === null) {
                  window.location.href = '/login'
                } else {
                  window.location.href = '/home'
                }
              }}
            />
          </Show>
        </Col>
        <Col />
      </Row>
    </Container>
  </div>
)

export default Welcome
