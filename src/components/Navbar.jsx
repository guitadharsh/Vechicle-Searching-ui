import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { IconButton, Menu, MenuItem } from '@mui/material';
import { logout } from '../store/auth';

export default function ButtonAppBar() {

  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const loggedIn = useSelector((state) => state.auth.loggedIn)
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout())
    Navigate('/')
    handleClose()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            VSA
          </Typography>

          {
            !loggedIn &&
            <>
              <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                Vechicle Search Application
              </Typography>
            </>
          }

          {
            loggedIn &&   
            <>
            <Typography onClick={()=>Navigate('/home/search')} variant="subtitle1" component="div" sx={{ flexGrow: 1, color: 'white', cursor: 'pointer' }}>
              Search Vehicles
            </Typography>
          </>
          }

{
            loggedIn &&   
            <>
            <Typography onClick={()=>Navigate('/home/table')} variant="subtitle1" component="div" sx={{ flexGrow: 1, color: 'white', cursor: 'pointer' }}>
              Penality Vechicles
            </Typography>
          </>
          }

          {
            !loggedIn &&
            <Button color="inherit" onClick={() => Navigate('/login')}>Login</Button>
          }

          {
            loggedIn &&

            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}