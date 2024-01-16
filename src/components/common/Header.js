// Header.js
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import DrawerComponent from '../layout/Drawer';
import {useNavigate } from 'react-router-dom';

const Header = (props) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleItemClick = (RoutePath) => {
    navigate(RoutePath);
    handleDrawerClose();
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* Burger Menu */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* Heading in the Center */}
          <Stack direction="row" alignItems="center" justifyContent="center" >
            <Typography variant={props.mobile?"h6":"h5"} component="div">
            {props.Heading}
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <DrawerComponent
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        onItemClick={handleItemClick}
      />
    </div>
  );
};

export default Header;
// sx={{ marginLeft: !props.mobile && '40%' }}