import React from 'react'
import ReactTextTransition, { presets } from 'react-text-transition'
import { Container, Row, Col } from 'react-bootstrap'

import { BigText, BigText2, BigText3 } from '../../UI/bigtext'
import { Show } from './styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from '../../UI/Button'


const PositiveMessages = () => {
  function getQuote() {
    fetch('https://api.kanye.rest')
      .then(resp => resp.json())
      .then(data => {
        document.getElementById('quote').innerHTML = data.quote
      })
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <BigText>
              <ReactTextTransition
                text="You "
                spring={presets.molasses}
                className="big"
                delay={300}
                inline
              />
              Beautiful.
            </BigText>
          </Col>
        </Row>
        <Row>
          <Col>
            <BigText2>
              <ReactTextTransition
                text="Have a Kanye quote."
                spring={presets.default}
                className="small"
                delay={1000}
              />
            </BigText2>
            <Show>
              <Button id="mybutton" text="Refresh" onClick={() => getQuote()} />
            </Show>
            <BigText3>
              <Show>
                <span id="quote" />
              </Show>
            </BigText3>
          </Col>
          <Col>
            <BigText2>
              <ReactTextTransition
                text="Check messages from friends."
                spring={presets.default}
                className="small"
                delay={1700}
              />
            </BigText2>
            <Show>
              <div className="jumbotron">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Messages</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="col"> you dont have friends yet bruh </th>
                      <th scope="col"> </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Show>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PositiveMessages
