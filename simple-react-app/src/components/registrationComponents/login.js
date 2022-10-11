import React, { useContext } from 'react';
import { Button, List, ListItem, Paper, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import jwt from 'jwt-decode';
import { GetApi } from '../utilityComponents/currentAPI';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { setUser, setIsLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username, password);

    await fetch(GetApi('users/login'), {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else if (data.data) {
          // Store JWT token in cookie session data
          document.cookie = `token=${data.data}`;
          const userJWT = jwt(document.cookie);
          console.log(`User JWT: ${userJWT.username}`);
          // Update context
          setUser(userJWT.username);
          setIsLoggedIn(true);
          navigate('/');
        }
        console.log(data);
      });
  };

  return (
    <div>
      <h3>Login Form</h3>
      <Paper elevation={3} sx={{ width: 1000, margin: 'auto' }}>
        <form onSubmit={handleSubmit}>
          <List>
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

export default Login;
