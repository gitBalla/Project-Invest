import React from 'react';
import {
  Button,
  List,
  ListItem,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GetApi } from '../utilityComponents/currentAPI';

const Signup = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [developer, setDeveloper] = React.useState(false);
  const [investor, setInvestor] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(firstName, lastName, username, password, developer, investor);

    await fetch(GetApi('users'), {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        developer: developer,
        investor: investor,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          console.log(data);
          navigate('/login');
        }
      });
  };

  return (
    <div>
      <h3>Signup Form</h3>
      <Paper elevation={3} sx={{ width: 1000, margin: 'auto' }}>
        <form onSubmit={handleSubmit}>
          <List>
            <ListItem>
              <TextField
                required
                label="First Name"
                variant="filled"
                margin="normal"
                fullWidth
                onChange={(e) => setFirstName(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                required
                label="Last name"
                variant="filled"
                margin="normal"
                fullWidth
                onChange={(e) => setLastName(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                required
                label="Username"
                variant="filled"
                margin="normal"
                fullWidth
                onChange={(e) => setUsername(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                required
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                margin="normal"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox onChange={(e) => setDeveloper(e.target.checked)} />
                }
                label="Developer"
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox onChange={(e) => setInvestor(e.target.checked)} />
                }
                label="Investor"
              />
            </ListItem>
            <ListItem>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </ListItem>
          </List>
        </form>
      </Paper>
    </div>
  );
};

export default Signup;
