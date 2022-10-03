import React, { useContext } from 'react';
import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { UserContext } from '../../App';


const ProfileButton = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { isLoggedIn } = useContext(UserContext);

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
                    
                    <Link to="/">
                        <MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
                    </Link>
                    {isLoggedIn === true &&
                        <div>
                            <Link to="/myApplications">
                                <MenuItem onClick={handleMenuClose}>My Applications</MenuItem>
                            </Link>
                            <Link to="/myProjects">
                                <MenuItem onClick={handleMenuClose}>My Projects</MenuItem>
                            </Link>
                            <Link to="/settings">
                                <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                            </Link>
                        </div>
                    }
                    {isLoggedIn === false &&
                        <div>
                            <Link to="/login">
                                <MenuItem onClick={handleMenuClose}>Login</MenuItem>
                            </Link>
                            <Link to="/signup">
                                <MenuItem onClick={handleMenuClose}>Signup</MenuItem>
                            </Link>
                        </div>
                    }
                </Menu>
            </div>
        );
}

export default ProfileButton;