import {
  ListItem,
  List,
  TextField,
  Paper,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";

function EditProfileForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = location.state;

  const [displayName, setDisplayName] = React.useState('');
  const [gitHub, setGitHub] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [status, setStatus] = React.useState('');

  // Submit button handling needed!!
  const handleSubmit = async (e) => {
    console.log(displayName, gitHub, email, description, status);
    await fetch('http://localhost:1337/api/profiles/', {
      method: 'PUT',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        displayName: displayName,
        gitHub: gitHub,
        email: email,
        description: description,
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
    navigate("/profile");
  };

  const handleCancel = async (e) => {
    navigate("/profile");
  }

  return (
    <Container>
      <Typography variant="h4">Edit Profile</Typography>
      <Paper elevation={3} sx={{ width: 1000, margin: "auto" }}>
        <form onSubmit={handleSubmit} onReset={handleCancel}>
          <List>
            <ListItem>
              <TextField
                required
                label="Display Name"
                defaultValue={currentUser.data.displayName} // Take current first name
                variant="filled"
                margin="normal"
                fullWidth
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                label="GitHub"
                defaultValue={currentUser.data.github.trim()} // Take current github link
                variant="filled"
                margin="normal"
                fullWidth
                onChange={(e) => setGitHub(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                label="Contact Email"
                defaultValue={currentUser.data.email.trim()} // Take current github link
                variant="filled"
                margin="normal"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                label="Profile Description"
                defaultValue={currentUser.data.description.trim()}
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
                defaultValue={currentUser.data.status}
                SelectProps={{
                  native: true,
                }}
                variant="filled"
                margin="normal"
                sx={{ width: "25ch" }}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option> </option>
                <option> Public </option>
                <option> Private </option>
              </TextField>
            </ListItem>
            <ListItem>
              <Button variant="contained" type="submit">
                Submit
              </Button>
              <Divider orientation="vertical"/>
              <Button variant="contained" type="reset">
                Cancel
              </Button>
            </ListItem>
          </List>
        </form>
      </Paper>
    </Container>
  );
}

export default EditProfileForm;
