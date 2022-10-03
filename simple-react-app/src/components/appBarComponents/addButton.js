import React from 'react';
import { IconButton, Menu, MenuItem } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";


const AddButton = () => {
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
                aria-controls="menu-appbar"
                aria-haspopup ="true"
                onClick={handleMenuOpen}
                color="inherit"
              >
                <AddIcon />
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
                <Link to="/projectForm">
                  <MenuItem onClick={handleMenuClose}>New Project</MenuItem>
                </Link>
                <Link to="/applicationForm">
                  <MenuItem onClick={handleMenuClose}>New Application</MenuItem>
                </Link>
                
              </Menu>
            </div>
        );
}

export default AddButton;