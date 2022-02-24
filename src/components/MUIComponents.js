import * as React from 'react';

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Grid' 
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import { Badge, IconButton, InputBase, Menu, MenuItem, StyledEngineProvider, TextField, Typography } from '@mui/material';
import '../Styles.scss';
import { CacheProvider } from '@emotion/react';
import ShoppingCartIcon  from '@mui/icons-material/ShoppingCart';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';


function MUIComponents() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
      <>

    <AppBar position="sticky" className={`bg_theme flex_center`}>

        <Container>
        <Grid container>
        <Grid  item xs={4}>
        <Typography variant="h4">
Logo
        </Typography>
        </Grid>
        <Grid className={`flex_center flex`} item xs={4}>
        <InputBase className={`white`} fullWidth placeholder="Search awesomeness">
    </InputBase>
    <IconButton >
    <SearchIcon className={`white`} />
    </IconButton>
        </Grid>
        <Grid className={`flex_right flex flex_align_center`} item xs={4}>

            <Button onClick={handleClick} className={`white`}>Hello Guest</Button>
            <Menu
       
       anchorEl={anchorEl}
       open={open}
       onClose={handleClose}
       MenuListProps={{
         'aria-labelledby': 'basic-button',
       }}
     >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}> <NavLink to='/signup'>Signup</NavLink> </MenuItem>
                <MenuItem onClick={handleClose}>My Orders</MenuItem>
            </Menu>
            <IconButton>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon className={`white`}></ShoppingCartIcon>
                </Badge>
            </IconButton> 
        </Grid>
    </Grid>
        </Container>
    
        
        
   
     
</AppBar>

      </>
   
  )
}

export default MUIComponents