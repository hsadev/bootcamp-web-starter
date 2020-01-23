import React, { useState } from 'react'
import ReactTextTransition, { presets } from 'react-text-transition'
// import { Container, Row, Col } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import { useQuery } from '@apollo/react-hooks'
import { BigText } from '../../UI/bigtext'
import GetLaugh from './components/GetLaugh'
import AddEntries from './components/AddEntries'
// home page will have a gratitude journal and a 'get a laugh' section (preferably side-by-side?)
// it might also have a positive news section

// import the add entry and get a laugh components
// import the get all entries query from graphql


const Home = () => {
  // use the state hook to keep track of the current text the user is typing
  const [entry, setEntry] = useState('')


  return (
    <div>

      <input type="text" placeholder="Today I'm thankful for..." value={entry} onChange={e => setEntry(e.target.value)} />
      <BigText>
        <ReactTextTransition
          text="Welcome "
          spring={presets.molasses}
          className="big"
          delay={800}
          inline
        />
      </BigText>
      <GetLaugh />
      <AddEntries />
      {' '}
      {/* // This is just here to test that the GetLaugh Component works */}
      {/* // include the add entry component here
            // map over all the entries data

            // include the get laugh component here */}

    </div>
  )
}

export default Home
