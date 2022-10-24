import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Box, Button, CircularProgress, Divider, Grid, Typography }  from '@mui/material'
import { DashboardCard } from '../dashboardComponents/dashboardList'
import useFetch from 'react-fetch-hook';
import { GetApi } from '../utilityComponents/currentAPI';
import { Link, Outlet, useNavigate } from "react-router-dom";
import kanbanImage from "./landingPageImage.jpg";
import profileImage from "./profileImage.png";
import { Stack } from '@mui/system';


function LandingPage() {
    const { isLoggedIn } = useContext(UserContext);
    const projects = useFetch(GetApi('projects'));
    const navigate = new useNavigate();

    //if logged in we should redirect them to the dashboard instead??
    if (isLoggedIn) { navigate('/Dashboard')}

      // Displays status of get call
    if (projects.error) {
        return (
        <div>
            <p>Error: {projects.error.name}</p>
            <p>Message: {projects.error.message}</p>
            <br />
            <p>Stack: {projects.error.stack}</p>
        </div>
        );
    }
    if (projects.isLoading) {
        return <CircularProgress color="inherit" />;
    }

	return (
        <div>
            <br />
            <Box sx={{ flexGrow: 1 }} >
                <Grid container columns={{ xs: 5, md: 10}} padding={2}>
                    <Grid xs={5} padding='50px'>
                        <h3>Where Do You See Your Next Project Going?</h3>
                        <br />
                        <Typography>Welcome to Project-Invest! Whether you're a developer looking to grow
                            your team or find investors, or an idea-guy looking for a team to help turn
                            your idea into a product, Project-Invest will help you to find your team and
                            continue to grow as your project grows!
                        </Typography>
                        <br />
                        <Stack spacing={2} direction='row' justifyContent='center'>
                            <Link to="/signup">
                                <Button role="loginButton" variant="contained">Sign up today!</Button>
                            </Link>
                            <Link to="/dashboard">
                                <Button role="dashboardButton" variant="contained">Go to the Dashboard</Button>
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid xs={5} padding='50px' paddingTop='0px'>
                        <img    
                            src={kanbanImage} 
                            alt="a team working on a life-size kanban board"
                            height='100%vh'
                            width='100%vw'
                            />
                    </Grid>
                </Grid>
                <Grid container columns={{ xs: 5, md: 10}} padding={2} backgroundColor="coral" >
                    <Grid xs={5} padding='50px'>
                        {/**columns refers to how many cards will fit on the screen in each view size */}
                        <Grid container padding={{xs:1}} spacing={{ xs: 1 }} columns={{ xs: 2, sm: 8, md: 2, lg: 8}}>
                            {projects.data.slice(0,4).map((project) => (
                                <Grid xs={2} sm={4} md={4} key={project} >
                                    <DashboardCard project={project} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid xs={5} padding='50px'>
                        <br />
                        <h3>View Projects</h3>
                        <br />
                        <Typography>Get familiar with our project listings. Developers and investors
                            from Project-Invest post their projects and you can view them right from
                            the dashboard. Here are a few recent projects, or hop in and get right to
                            the full dashboard. Login to view your own projects or make a new project.
                        </Typography>
                        <br />
                        <Stack spacing={2} direction='row' justifyContent='center'>
                            <Link to="/dashboard">
                                <Button role="dashboardButton" variant="contained">Go to the Dashboard</Button>
                            </Link>
                            <Link to="/login">
                                <Button role="loginButton" variant="contained">Login for more features</Button>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
                <Divider sx={{ borderBottomWidth: 5 }} />
                <Grid container columns={{ xs: 5, md: 10}} padding={2}>
                    <Grid xs={5} padding='50px'>
                        <br />
                        <h3>Create a Profile</h3>
                        <br />
                        <Typography>Now that we have you here, jump on a create a profile! Start
                            reaching out to your fellow team members or find new developers or
                            investors to join your projects today.
                        </Typography>
                        <br />
                        <Stack spacing={2} direction='row' justifyContent='center'>
                            <Link to="/signup">
                                <Button role="loginButton" variant="contained">Sign up</Button>
                            </Link>
                            <Link to="/login">
                                <Button role="loginButton" variant="contained">Login</Button>
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid xs={5} padding='50px'>
                        <img 
                            src={profileImage} 
                            alt="an example of a profile on project-invest"
                            height='95%vh'
                            width='90%vw'
                            />
                        <br />
                    </Grid>
                </Grid>
            </Box>
            <Outlet />
        </div>
        );
    }
    
    export default LandingPage;