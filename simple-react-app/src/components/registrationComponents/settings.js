import React, { useContext } from 'react';
import {
  List,
  ListItem,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import { CircularProgress } from '@mui/material';
import { UserContext } from '../../App';
import useFetch from 'react-fetch-hook';
import { GetApi } from '../utilityComponents/currentAPI';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const { user } = useContext(UserContext);
  const [editDisabled, setEditDisabled] = React.useState(true);

  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [developer, setDeveloper] = React.useState(false);
  const [investor, setInvestor] = React.useState(false);

  const handleSubmit = async (e) => {
    console.log(firstName, lastName, user, password, developer, investor);
    setEditDisabled(true);
    await fetch(GetApi('users'), {
      method: 'PUT',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        username: user,
        password: password,
        developer: developer,
        investor: investor,
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

  const editDetails = () => {
    // Set initial values
    setFirstName(registration.data.firstName);
    setLastName(registration.data.lastName);
    setPassword(registration.data.password);
    setDeveloper(registration.data.developer);
    setInvestor(registration.data.investor);
    setEditDisabled(false);
  };

  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  const registration = useFetch(GetApi(`users/${user}`));

  // Check if user exists by seeing if all users were returned
  if (Array.isArray(registration.data)) {
    return (
      <div>
        <h1>404: User not found</h1>
      </div>
    );
  }

  // Displays status of get call
  if (registration.error) {
    return (
      <div>
        <p>Error: {registration.error.name}</p>
        <p>Message: {registration.error.message}</p>
        <br />
        <p>Stack: {registration.error.stack}</p>
      </div>
    );
  }

  if (registration.isLoading) {
    return <CircularProgress color="inherit" />;
  }

  return (
    <div>
      <h3>{user} Settings</h3>
      <Paper elevation={3} sx={{ width: 1000, margin: 'auto' }}>
        <form>
          <List>
            <ListItem>
              <TextField
                disabled
                label="Username"
                defaultValue={registration.data.username}
                variant="filled"
                margin="normal"
              />
            </ListItem>
            <ListItem>
              <TextField
                disabled={editDisabled}
                label="Password"
                defaultValue={registration.data.password}
                type="password"
                variant="filled"
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                disabled={editDisabled}
                label="First Name"
                defaultValue={registration.data.firstName}
                variant="filled"
                margin="normal"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                disabled={editDisabled}
                label="Last Name"
                defaultValue={registration.data.lastName}
                variant="filled"
                margin="normal"
                onChange={(e) => setLastName(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                disabled={editDisabled}
                control={
                  <Checkbox
                    defaultChecked={registration.data.developer}
                    onChange={(e) => setDeveloper(e.target.checked)}
                  />
                }
                label="Developer"
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                disabled={editDisabled}
                control={
                  <Checkbox
                    defaultChecked={registration.data.investor}
                    onChange={(e) => setInvestor(e.target.checked)}
                  />
                }
                label="Investor"
              />
            </ListItem>
            <ListItem>
              <Button onClick={editDetails} variant="contained">
                Edit
              </Button>
              <Button
                disabled={editDisabled}
                onClick={handleSubmit}
                variant="contained"
              >
                Apply
              </Button>
              <Button variant="contained" onClick={handleExit}>
                Exit
              </Button>
            </ListItem>
          </List>
        </form>
      </Paper>
    </div>
  );
};

export default Settings;
