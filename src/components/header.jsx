import React from 'react';
import { AppBar, Toolbar, Typography, Switch } from '@mui/material';

function Header({ darkMode, onToggle }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Interview Chat Assistant
        </Typography>
        <Switch checked={darkMode} onChange={onToggle} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
