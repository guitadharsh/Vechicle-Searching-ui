import { Container } from '@mui/material'
import React from 'react'
import Table from '../components/Table'

function Home() {
  return (
    <Container sx={{minHeight: 200}}>
      <Table />
    </Container>
  )
}

export default Home