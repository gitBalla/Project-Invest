import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Box } from "@mui/material";
import LinkMui from "@mui/material/Link"
import ProfileButton from './profileButton.js';
import AddButton from './addButton.js';
import { Outlet, Link } from "react-router-dom";


const ButtonAppBar = () => {
    const [setWindowWidth] = useState(window.innerWidth);
    //const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    },);

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