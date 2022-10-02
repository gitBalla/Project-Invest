import React from 'react';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username, password);

    await fetch('https://devfund-api.azurewebsites.net/api/users/login', {
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
        }
        console.log(data);
        if (data.data) {
          // Store JWT token in cookie session data
          document.cookie = `token=${data.data}`;
        }
      });
  };

  return (
    <div>
      <form
        style={{
          display: 'flex',
          'flex-direction': 'column',
          'justify-content': 'center',
          'align-items': 'center',
        }}
        onSubmit={handleSubmit}
      >
        <h3>Login Form</h3>

        <label>Username:</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
