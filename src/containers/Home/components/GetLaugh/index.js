// use api to display jokes
import React from 'react'

import ReactTextTransition, { presets } from 'react-text-transition'
import { Container, Row, Col } from 'react-bootstrap'

import { BigText, BigText2, BigText3 } from '../../../../UI/bigtext'

import { Show } from '../../../PositiveMessages/styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from '../../../../UI/Button'


const GetLaugh = () => {
  function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(resp => resp.json())
      .then(data => {
        document.getElementById('setup').innerHTML = data.setup
        document.getElementById('punchline').innerHTML = data.punchline
      })
  }


  return (
    <Container>
      <BigText2>
        <ReactTextTransition
          text="Get a Laugh"
          spring={presets.default}
          className="small"
          delay={1000}
        />
      </BigText2>
      <Show>
        <Button id="jokeButton" text="Make me HaHa" onClick={() => getJoke()} />
      </Show>
      <BigText3>
        <Show>
          <span id="setup" />
        </Show>
        <Show>
          <span id="punchline" />
        </Show>
      </BigText3>
    </Container>
  )
}
export default GetLaugh
