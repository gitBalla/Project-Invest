import React from 'react';
import { AppBar, Toolbar, Box } from "@mui/material";
import LinkMui from "@mui/material/Link"
import ProfileButton from './profileButton.js';
import AddButton from './addButton.js';
import { Outlet, Link } from "react-router-dom";


const ButtonAppBar = () => {
    return (
        <div >
            <AppBar position='sticky' >
                <Toolbar >
                    <AddButton />
                    <Box display='flex-row' flexGrow={1}>
                        <Link to='/' >
                            <LinkMui component='button' underline='none' variant='h5' sx={{ color: 'white' }} >
                                Project-Invest
                            </LinkMui>
                        </Link>
                    </Box>
                    <ProfileButton />
                </Toolbar>
            </AppBar>
            <br />
            <Outlet />
        </div>
    );
}

export default ButtonAppBar;