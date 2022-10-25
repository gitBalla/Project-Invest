import React, { useContext } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const ProfileButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { isLoggedIn, setUser, setIsLoggedIn } = useContext(UserContext);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    setUser('');
    setIsLoggedIn(false);
    // Set cookie to expiry
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };

  return (
    <div>
      <IconButton
        role="profileMenu"
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <AccountCircle />
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
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <Link to="/dashboard">
          <MenuItem role="dashboardMenuItem" onClick={handleMenuClose}>Dashboard</MenuItem>
        </Link>
        {isLoggedIn === true && (
          <div>
            <Link to="/profile">
              <MenuItem role="profileMenuItem" onClick={handleMenuClose}>My Profile</MenuItem>
            </Link>
            <Link to="/settings">
              <MenuItem role="settingsMenuItem" onClick={handleMenuClose}>Settings</MenuItem>
            </Link>
            <Link to="/login">
              <MenuItem role="logoutMenuItem" onClick={handleLogout}>Logout</MenuItem>
            </Link>
          </div>
        )}
        {isLoggedIn === false && (
          <div>
            <Link to="/login">
              <MenuItem role="loginMenuItem" onClick={handleMenuClose}>Login</MenuItem>
            </Link>
            <Link to="/signup">
              <MenuItem role="signupMenuItem" onClick={handleMenuClose}>Signup</MenuItem>
            </Link>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default ProfileButton;
