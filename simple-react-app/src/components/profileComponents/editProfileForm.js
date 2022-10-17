import {
  ListItem,
  List,
  TextField,
  Paper,
  Button,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import React, { useContext } from "react";
import { GetProfile } from "../utilityComponents/user";
import { GetApi } from '../utilityComponents/currentAPI';

function EditProfileForm() {
  const navigate = useNavigate();
  const [editDisabled, setEditDisabled] = React.useState(true);

  const { user } = useContext(UserContext);
  //take the context user (from user namespace) and get the profile details from api
  const userProfile = GetProfile(user);

  const [displayName, setDisplayName] = React.useState('');
  const [gitHub, setGitHub] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [status, setStatus] = React.useState('');

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

  const editDetails = () => {
    // Set initial values
    setDisplayName(userProfile.data.displayName);
    setGitHub(userProfile.data.gitHub);
    setEmail(userProfile.data.email);
    setDescription(userProfile.data.description);
    setStatus(userProfile.data.status);
    setEditDisabled(false);
  };

  // Submit button handling needed!!
  const handleSubmit = async (e) => {
    setEditDisabled(true);
    await fetch(GetApi('profiles'), {
      method: 'PUT',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username: userProfile.data.username,
        displayName: displayName,
        profileImage: userProfile.data.profileImage,
        description: description,
        github: gitHub,
        email: email,
        status: status,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        }
        console.log(data);
      });
  };

  const handleExit = async (e) => {
    navigate("/profile");
  }

  return (
    <Container>
      <Typography variant="h4">Edit Profile</Typography>
      <Paper elevation={3} sx={{ width: 1000, margin: "auto" }}>
        <form onSubmit={handleSubmit} onReset={handleExit}>
          <List>
            <ListItem>
              <TextField
                required
                label="Display Name"
                disabled={editDisabled}
                defaultValue={userProfile.data.displayName}
                variant="filled"
                margin="normal"
                fullWidth
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                label="GitHub"
                disabled={editDisabled}
                defaultValue={userProfile.data.github.trim()}
                variant="filled"
                margin="normal"
                fullWidth
                onChange={(e) => setGitHub(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                label="Contact Email"
                disabled={editDisabled}
                defaultValue={userProfile.data.email.trim()}
                variant="filled"
                margin="normal"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                label="Profile Description"
                disabled={editDisabled}
                defaultValue={userProfile.data.description.trim()}
                multiline
                variant="filled"
                margin="normal"
                fullWidth
                onChange={(e) => setDescription(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                select
                label="Profile Status"
                disabled={editDisabled}
                defaultValue={userProfile.data.status}
                SelectProps={{
                  native: true,
                }}
                variant="filled"
                margin="normal"
                sx={{ width: "25ch" }}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option> Public </option>
                <option> Private </option>
              </TextField>
            </ListItem>
            <ListItem>
              <Button onClick={editDetails} disabled={!editDisabled} variant="contained">
                Edit
              </Button>
              <Button disabled={editDisabled} variant="contained" type="submit">
                Submit
              </Button>
              <Divider orientation="vertical"/>
              <Button variant="contained" type="reset">
                Exit
              </Button>
            </ListItem>
          </List>
        </form>
      </Paper>
    </Container>
  );
}

export default EditProfileForm;
