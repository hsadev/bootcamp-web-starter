import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import Navbar from './containers/Navbar'
import Friends from './containers/Friends'
import Register from './containers/Register'
import Welcome from './containers/Welcome'
import PositiveMessages from './containers/PositiveMessages'
import ParticlesBackground from './UI/particles.js'
import Login from './containers/Login'

const AppWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: ${props => props.theme.colors.lightLilac};
`

const App = () => (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <ApolloProvider client={client}>
          <div className="App">
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <ParticlesBackground />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <Switch>
                <Route exact path="/">
                  <Welcome />
                </Route>
                <Route path="/home">
                  <Navbar />
                  <Home />
                </Route>
                <Route path="/friends">
                  <Navbar />
                  <Friends />
                </Route>
                <Route path="/positiveMessages">
                  <Navbar />
                  <PositiveMessages />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
              </Switch>
            </div>
          </div>
        </ApolloProvider>
      </AppWrapper>
    </ThemeProvider>
)

export default App
