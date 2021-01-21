import React from 'react'
import { OList, ListItem } from '../../styles'

const Steps = ({ steps }) => (
  <>
    <h2>Steps</h2>
    <OList>
      {steps.map(({ step, number }) => (
        <ListItem key={number}>{step}</ListItem>
      ))}
    </OList>
  </>
)

export default Steps
