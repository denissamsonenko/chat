import React, {useContext} from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import {NavLink} from 'react-router-dom'
import {LOGIN_ROUTE} from '../utils/consts'
import {Context} from '../index'
import {useAuthState} from 'react-firebase-hooks/auth'

const Navbar = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <AppBar color={'secondary'} position="static">
      <Toolbar variant={"dense"}>
        <Grid container sx={{justifyContent: 'flex-end'}}>
          {user ?
            <Button variant={'outlined'} onClick={() => auth.signOut()}>Logout</Button>
            :
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={'outlined'}>Login</Button>
            </NavLink>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
