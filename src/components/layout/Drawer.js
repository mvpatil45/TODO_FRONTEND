import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';

const DrawerComponent = ({ open, onClose, onItemClick }) => {
  const routeMapping = {
    'Todo List': '/',
    'Video Player': '/video',
  };

  const location = useLocation();

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ display: 'flex', flexDirection: 'row' }}>
        {/* User Section */}
        <ListItem sx={{ justifyContent: 'center'}}>
          <ListItemIcon>
            <AccountCircleIcon fontSize="large" />
          </ListItemIcon>
        </ListItem>
        {/* <ListItem>
          <ListItemText primary="User" />
        </ListItem> */}
        {/* <ListItem button onClick={onClose} sx={{ marginRight:'2px' }}>
          <ListItemIcon>
            <CloseIcon />
          </ListItemIcon>
        </ListItem> */}
      </List>
      <List>
        {/* Navigation Items */}
        {Object.entries(routeMapping).map(([displayText, routePath]) => (
          <ListItem
            key={displayText}
            button
            onClick={() => onItemClick(routePath)}
            selected={location.pathname === routePath}
            sx={{
              backgroundColor: location.pathname === routePath ? '#2196f3' : 'transparent',
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            <ListItemIcon>
              {displayText === 'Todo List' ? <HomeIcon /> : <VideoLibraryIcon />}
            </ListItemIcon>
            <ListItemText primary={displayText} />
          </ListItem>
        ))}

      </List>
    </Drawer>
  );
};

export default DrawerComponent;
