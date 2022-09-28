import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Toolbar, Typography, IconButton
} from "@mui/material";
import ProfileButton from './profileButton.js';
import { Outlet } from "react-router-dom";


const ButtonAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" >
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Project-Invest
                    </Typography>
                    <ProfileButton />
                </Toolbar>
            </AppBar>
            <Outlet />
        </Box>
    );
}

export default ButtonAppBar;