import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import image from "./profile.png";
import  "../Components/Header.css"



function NavBar() {
   
  return (
    <div className='root '>
      <AppBar     position="static">
        <Container >
          <Toolbar>
            <div className='leftLinks'>
              <Typography variant="h6" className='title'>
                 <img    className ="logo" src={image}  alt="Logo"/>
              </Typography>
              <Button color="inherit" className='navLink'>
                Home
              </Button>
              <Button color="inherit" className='navLink'>
                Solutions
              </Button>
              <Button color="inherit" className='navLink'>
                Features
              </Button>
              <Button color="inherit" className='navLink'>
                About
              </Button>
            </div>
            <div className='rightLinks'>
              <Button color="inherit" className='navLink'>
                Login
              </Button>
              <Button color="inherit" className='navLink'>
                Register
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default NavBar;