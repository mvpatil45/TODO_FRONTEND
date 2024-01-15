// DrawerComponent.js
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const DrawerComponent = ({ open, onClose, onItemClick }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        {['Item 1', 'Item 2', 'Item 3'].map((text) => (
          <ListItem button key={text} onClick={() => onItemClick(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
