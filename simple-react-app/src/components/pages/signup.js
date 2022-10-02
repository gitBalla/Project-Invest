import React from 'react';

const Signup = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [developer, setDeveloper] = React.useState(false);
  const [investor, setInvestor] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(firstName, lastName, username, password, developer, investor);

    await fetch('https://devfund-api.azurewebsites.net/api/users', {
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
          alert('Username taken, try another username');
        }
        console.log(data);
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
        <h3>Signup Form</h3>

        <label>First Name:</label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <label>Last Name:</label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
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
        <label>Developer:</label>
        <input
          type="checkbox"
          name="box1"
          onChange={(e) => setDeveloper(e.target.checked)}
          value={developer}
        />
        <label>Investor:</label>
        <input
          type="checkbox"
          onChange={(e) => setInvestor(e.target.checked)}
          value={investor}
        />

        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
