import React from 'react'
import Grid from '@mui/material/Grid'
import Navbar from './components/Navbar'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <Grid>
      <Navbar />
      <Outlet />
    </Grid>
  )
}

export default App