import React, {useContext} from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {Context} from '../index'
import firebase from 'firebase/compat/app'

const Login = () => {
  const {auth} = useContext(Context)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return (
    <Container>
      <Grid container sx={{height: window.innerHeight - 50, alignItems: 'center', justifyContent: 'center'}}>
        <Grid container sx={{width: '400px', background: 'lightgray', alignItems: 'center', justifyContent: 'center', direction: 'column'}}>
          <Box p={5}>
            <Button variant={'outlined'} onClick={login}>
              Sign in with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
