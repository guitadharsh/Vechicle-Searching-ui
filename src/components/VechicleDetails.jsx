import { Button, Container, CssBaseline, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';

function VechicleDetails(props) {
  return (
    <Container>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            mt: 8,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={3} sx={{ minWidth: 700, minHeight: 300 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 3, pl: 3, pr: 3 }}>
            <Typography variant="h6" color="initial">Details</Typography>
            <IconButton onClick={props.close}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{display: 'flex'}}>
            <Box sx={{minWidth: 200}}>
              <img src="https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?w=2000" alt="" style={{width: '10rem', height: '10rem'}}/>
            </Box>

               
            <Box sx={{display: 'flex', flexDirection: 'column', mt: 3,  mr: 5}}>
              <Typography variant="subTitle1" color="initial" sx={{mb: 1}}>Owner Name: Nowshad</Typography>
              <Typography variant="subTitle1" color="initial" sx={{mb: 1}}>Chassis N0: ME4KS72DJSU2SM</Typography>
              <Typography variant="subTitle1" color="initial" sx={{mb: 1}}>Engine NO: KCEY3DNSU3ND</Typography>
              <Typography variant="subTitle1" color="initial" sx={{mb: 1}}>Fuel Used: Petrol</Typography>
            </Box>
            
         
         
            <Box sx={{display: 'flex', flexDirection: 'column', mt: 3}}>
              <Typography variant="subTitle1" color="initial" sx={{mb: 1}}>Model Name: Safari</Typography>
              <Typography variant="subTitle1" color="initial" sx={{mb: 1}}>Penalities Due : None</Typography>
              <Typography variant="subTitle1" color="initial" sx={{mb: 1}}>Last Location: Nedumangad</Typography>
              {/* <Typography variant="subTitle1" color="initial" sx={{mb: 1}}>Car Owner: Nowshad</Typography> */}
            </Box>
          </Box>
              <center><Button variant='contained' size='small'>View More</Button></center>
        </Paper>
      </Box>
    </Container>
  )
}

export default VechicleDetails