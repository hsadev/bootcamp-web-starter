import React, { useState } from 'react'
import {
  TextField, Grid, Button,
} from '@material-ui/core'

const Login = () => {
  const [username, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <TextField id="standard-basic" label="Username" />
      <TextField id="standard-basic" label="Password" />
      <Button variant="contained">Submit</Button>
    </Grid>
  )
}

export default Login
