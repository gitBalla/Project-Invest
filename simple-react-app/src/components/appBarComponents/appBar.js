import React from 'react';
import { AppBar, Box, Toolbar, Typography
} from "@mui/material";
import ProfileButton from './profileButton.js';
import AddButton from './addButton.js';
import { Outlet } from "react-router-dom";


const ButtonAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" >
                <Toolbar >
                    <AddButton />
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Project-Invest
                    </Typography>
                    <ProfileButton />
                </Toolbar>
            </AppBar>
            <br />
            <Outlet />
        </Box>
    );
}

export default ButtonAppBar;