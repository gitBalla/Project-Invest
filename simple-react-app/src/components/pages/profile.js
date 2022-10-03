import React from "react";
import { Avatar, Divider, Grid, Icon, Stack, IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { GitHub, Email, ModeEdit, StarOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Profile = (props) => {
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
            href="https://github.com/TobyLR?tab=repositories"
            target="_blank"
          >
            <Icon component={GitHub} fontSize="large" />
          </IconButton>
          <Stack direction="column">
            <Avatar sx={{ width: 96, height: 96 }} />
            <Typography>Username</Typography>
          </Stack>
          <IconButton>
            <Icon component={Email} fontSize="large" />
          </IconButton>
          <Link to="/editProfileForm">
            <IconButton>
              <Icon component={ModeEdit} fontSize="large" />
            </IconButton>
          </Link>
        </Stack>

        <Grid alignItems="stretch">
          <Divider flexItem>Description</Divider>
          <Stack direction="row" spacing={5} alignItems="center">
            <Typography>
              This section will hold the personal description written by each
              user it is not a required field to have an account.
            </Typography>
          </Stack>
          <Divider flexItem>Active Projects</Divider>
          <Stack direction="row" spacing={5} alignItems="center">
            <Typography>
              This section will hold any active projects the user is a part of
              whether they are investing or developing.
            </Typography>
          </Stack>
          <Divider flexItem>Completed Projects</Divider>
          <Stack direction="row" spacing={5} alignItems="center">
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
