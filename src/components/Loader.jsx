import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'

const Loader = () => {
  return (
    <Container>
      <Grid container sx={{height: window.innerHeight - 50, alignItems: 'center', justifyContent: 'center'}}>
        <Grid container sx={{
          alignItems: 'center',
          justifyContent: 'center',
          direction: 'column',
        }}>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Loader
