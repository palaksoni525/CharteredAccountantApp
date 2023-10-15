import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
const Footer = () => {
    return (
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="body2" color="inherit">
              &copy; 2023 Mohite Consultancy
            </Typography>
          </Toolbar>
        </AppBar>
    )
}

export default Footer