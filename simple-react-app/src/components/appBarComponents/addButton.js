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
                <MenuItem onClick={handleMenuClose}><Link to="/projectForm">New Project</Link></MenuItem>
                <MenuItem onClick={handleMenuClose}><Link to="/applicationForm">New Application</Link></MenuItem>
              </Menu>
            </div>
        );
}

export default AddButton;