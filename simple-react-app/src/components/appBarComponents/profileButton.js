import React from 'react';
import { IconButton, Menu, MenuItem
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";


const ProfileButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    return (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup ="true"
                onClick={handleMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
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
                <MenuItem onClick={handleMenuClose}><Link to="/">Dashboard</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}><Link to="/profile">Profile</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}><Link to="/application">Applications</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}>My Projects</MenuItem>
                <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              </Menu>
            </div>
    );
}

export default ProfileButton;