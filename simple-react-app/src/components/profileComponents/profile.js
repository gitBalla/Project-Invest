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
import { GitHub, Email, ModeEdit, StarOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { GetProfile } from "../utilityComponents/user";

const Profile = (props) => {
  const { user } = useContext(UserContext);
  //take the context user (from user namespace) and get the profile details from api
  const userProfile = GetProfile(user);

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
          <IconButton>
            <Icon component={StarOutline} fontSize="large" />
          </IconButton>
          <IconButton
            variant="link"
            href={userProfile.data.github}
            target="_blank"
          >
            <Icon component={GitHub} fontSize="large" />
          </IconButton>
          <Stack direction="column" alignItems="center">
            <Avatar src={userProfile.data.profileImage} sx={{ width: 96, height: 96 }} />
            <Typography>{userProfile.data.displayName}</Typography>
          </Stack>
          <IconButton href={emailAddress}>
            <Icon component={Email} fontSize="large" />
          </IconButton>
          <Link to="/editProfileForm">
            <IconButton>
              <Icon component={ModeEdit} fontSize="large" />
            </IconButton>
          </Link>
        </Stack>

        <Grid alignItems="stretch" paddingTop={3}>
          <Divider flexItem>Description</Divider>
          <Stack direction="column" spacing={5}>
            <Typography>
              {userProfile.data.description}
            </Typography>
          </Stack>
          <Divider flexItem>Active Projects</Divider>
          <Stack direction="column" spacing={5}>
            <Typography>
              This section will hold any active projects the user is a part of
              whether they are investing or developing.
            </Typography>
          </Stack>
          <Divider flexItem>Completed Projects</Divider>
          <Stack direction="column" spacing={5}>
            <Typography>
              This section will hold any active projects the user is a part of
              whether they are investing or developing.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
