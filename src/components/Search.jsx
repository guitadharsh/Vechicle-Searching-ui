import { Container, CssBaseline, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react'
import VechicleDetails from './VechicleDetails';

function Search() {

  const [searching, setSearching] = React.useState(false)

  const search = () => {
    setTimeout(() => {
      setSearching(true)
    }, 500);
  }

  const closeSearch = () => {
    setSearching(false)
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid>
            <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Vechicle Number</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={search}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Vechicle Number"
              />
            </FormControl>
          </Grid>


          <Grid>
            {
              searching && 
              <VechicleDetails close={closeSearch}/>
            }
          </Grid>

        </Box >
      </Container>
    </>
  )
}

export default Search