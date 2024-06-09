// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Allure
        </Typography>
        <Button color="inherit" component={Link} to="/home">Home</Button>
        <Button color="inherit" component={Link} to="/about">About Me</Button>
        <Button color="inherit" component={Link} to="/posts">Posts</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
        <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
//ovdje chatgpt