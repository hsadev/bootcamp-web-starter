/*
import React from 'react'

import { useHistory } from 'react-router-dom'
const jwt = require('jsonwebtoken')
const decodedToken = token => {
  try {
    return jwt.verify(token, 'reughdjsasdkpmasipkmsdfadf')
  } catch (error) {
    console.log(error)
  }
}

 
const Home = () => {

  const history = useHistory()
  const token = localStorage.getItem('token')
  const decoded = decodedToken(token)
  if (!decoded.user || !token) {
    history.push('/')
  }
  
  return (
    <div>Welcome to the DEV React starter!</div>
  )
}
*/

import React from 'react'
import { 
  Container, Column, Row, 
  Header, Text, Frame, 
  Button, OrderedList, 
  BulletList, ListItem
} from './styles'


const Home = () => {
  return (
    <Container>
      <Column>
        <Header>
          This is a header
        </Header>
        <Text>
          This is text
        </Text>
        <Button>
          A button!
        </Button>
      </Column>
      <Row>
        <Column>
          <Text>
            Something
          </Text>
          <Frame
            src="https://open.spotify.com/embed/playlist/37i9dQZEVXcVFoZvR0OgOZ" 
            allowtransparency="true" allow="encrypted-media"
          />
        </Column>
        <Column>
          <Text>
            Another thing
          </Text>
          <Text>
            And its description 
          </Text>
        </Column>
        <Column>
          <Text>
            One last thing
          </Text>
          <OrderedList>
            <ListItem>
              One
            </ListItem>
            <ListItem>
              Two
            </ListItem>
          </OrderedList>
          <BulletList>
            <ListItem>
              One
            </ListItem>
            <ListItem>
              Two
            </ListItem>
          </BulletList>
        </Column>
      </Row>
    </Container>
  )
}
export default Home
//export default Home

