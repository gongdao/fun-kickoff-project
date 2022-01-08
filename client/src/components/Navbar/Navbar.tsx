import React, { useState } from 'react';
import { useAuth } from '../../context/useAuthContext';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from '@mui/material';

import { Person as ProfileIcon, Logout as LogoutIcon, Settings as SettingsIcon } from '@mui/icons-material';
import useStyles from './useStyles';
import Logo from '../../assets/images/logo.png';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import greenDot from '../../assets/avatar/greenDot.png';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { loggedInUser, logout } = useAuth();
  const classes = useStyles();

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  return (
    <AppBar style={{ background: '#ffffff' }} className={classes.abNavbarRoot} sx={{ boxShadow: 0 }}>
      <Toolbar className={classes.abLogo}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={Logo} alt="logo" />
        </Typography>
        {loggedInUser && (
          <>
            <Button style={{ color: '#000000' }}>Jobs</Button>
            <Button style={{ color: '#000000', width: '20' }}>Message</Button>
            <img src={greenDot} alt="green dot" />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <AvatarDisplay loggedIn user={loggedInUser} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Settings</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ProfileIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
