import React from 'react'
import { OList, ListItem, Subtitle } from '../../styles'

const Steps = ({ steps }) => (
  <>
    <Subtitle>Steps</Subtitle>
    <OList>
      {steps.map(({ step, number }) => (
        <ListItem key={number}>{step}</ListItem>
      ))}
    </OList>
  </>
)

export default Steps
