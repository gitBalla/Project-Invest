import React, { useContext } from "react";
import {
  Avatar,
  Divider,
  Grid,
  Icon,
  Stack,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Container } from "@mui/system";
import DashboardList from '../dashboardComponents/dashboardList';
import { GitHub, Email, ModeEdit, StarOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { GetProfile } from "../utilityComponents/user";
import useFetch from 'react-fetch-hook';
import { GetApi } from '../utilityComponents/currentAPI';

const Profile = (props) => {
  const { user } = useContext(UserContext);
  const projects = useFetch(GetApi('projects'));
  //take the context user (from user namespace) and get the profile details from api
  const userProfile = GetProfile(user);

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

  if (Array.isArray(userProfile.data)) {
    return (
      <div>
        <h1>404: User not found</h1>
      </div>
    );
  }
  if (userProfile.error) {
    return (
      <div>
        <p>Error: {userProfile.error.name}</p>
        <p>Message: {userProfile.error.message}</p>
        <br />
        <p>Stack: {userProfile.error.stack}</p>
      </div>
    );
  }
  if (userProfile.isLoading) {
  return <CircularProgress color="inherit" />;
  }

  const sameUser = userProfile.data.username === user;
  if(userProfile.data.status === 'Private' && !sameUser){
    return (
      <div>
        <h1>User is set to private, return to <Link to="/">dashboard!</Link></h1>
      </div>
    );
  }

  const emailAddress = "mailto: " + userProfile.data.email;

  return (
    <Container maxWidth="md">
      <Grid justifyContent="center" container padding={1} spacing={2}>
        <Stack
          direction="row"
          spacing={5}
          alignItems="center"
          divider={<Divider orientation="vertical" flexItem />}
        >
          {sameUser === true &&(
            <IconButton>
              <Icon component={StarOutline} fontSize="large" />
            </IconButton>
          )}
          <IconButton
            variant="link"
            href={userProfile.data.github}
            target="_blank"
          >
            <Icon component={GitHub} fontSize="large" />
          </IconButton>
          <Stack direction="column" alignItems="center">
            <Avatar alt={userProfile.data.displayName.toUpperCase()} src={userProfile.data.profileImage} sx={{ width: 112, height: 112 }} />
            <Typography>{userProfile.data.displayName}</Typography>
          </Stack>
          <IconButton href={emailAddress}>
            <Icon component={Email} fontSize="large" />
          </IconButton>
          {sameUser === true &&(
            <Link to="/editProfileForm">
              <IconButton>
                <Icon component={ModeEdit} fontSize="large" />
              </IconButton>
            </Link>
          )}
        </Stack>

        <Grid alignItems="stretch" sx={{ minWidth: 800}} paddingTop={3}>
          <Divider flexItem>Description</Divider>
          <Stack direction="column" spacing={5}>
            <Typography>
              {userProfile.data.description}
            </Typography>
          </Stack>
          <Divider flexItem>Users Projects</Divider>
          <Stack direction="column" spacing={5}>
<<<<<<< HEAD
            <DashboardList projects={projects.data.filter(
              (item) => item.username === userProfile.data.username
            )} />
=======
            <Typography>
              This section will hold any projects the user is a part of
              whether they are investing or developing.
            </Typography>
          </Stack>
          <Divider flexItem>Bookmarked Projects</Divider>
          <Stack direction="column" spacing={5}>
            <Typography>
              This section will hold any bookmarked projects the user is interested in
              whether they are investing or developing.
            </Typography>
>>>>>>> Development-Profile
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
