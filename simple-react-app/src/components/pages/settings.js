import React, { useContext } from 'react';
import {
  List,
  ListItem,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  IconButton,
  Icon,
} from '@mui/material';
import { ModeEdit } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { UserContext } from '../../App';
import useFetch from 'react-fetch-hook';

const Settings = () => {
  const { user } = useContext(UserContext);

  const registration = useFetch(
    `https://devfund-api.azurewebsites.net/api/users/${user}`
  );

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
              <IconButton>
                <Icon component={ModeEdit} fontSize="large" />
              </IconButton>
            </ListItem>
            <ListItem>
              <TextField
                disabled
                label="Password"
                defaultValue={registration.data.password}
                type="password"
                variant="filled"
                margin="normal"
              />
              <IconButton>
                <Icon component={ModeEdit} fontSize="large" />
              </IconButton>
            </ListItem>
            <ListItem>
              <TextField
                disabled
                label="First Name"
                defaultValue={registration.data.firstName}
                variant="filled"
                margin="normal"
              />
              <IconButton>
                <Icon component={ModeEdit} fontSize="large" />
              </IconButton>
            </ListItem>
            <ListItem>
              <TextField
                disabled
                label="Last Name"
                defaultValue={registration.data.lastName}
                variant="filled"
                margin="normal"
              />
              <IconButton>
                <Icon component={ModeEdit} fontSize="large" />
              </IconButton>
            </ListItem>
            <ListItem>
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label="Developer"
                checked={registration.data.developer}
              />
              <IconButton>
                <Icon component={ModeEdit} fontSize="large" />
              </IconButton>
            </ListItem>
            <ListItem>
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label="Investor"
                checked={registration.data.investor}
              />
              <IconButton>
                <Icon component={ModeEdit} fontSize="large" />
              </IconButton>
            </ListItem>
          </List>
        </form>
      </Paper>
    </div>
  );
};

export default Settings;
