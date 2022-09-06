import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Dashboard from './components/dashboard';
import { PROJECTS } from './shared/projects';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: PROJECTS,
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar color="primary">
          <div className="container" id="brand">
            <NavbarBrand>Project-Invest</NavbarBrand>
            <button onClick={callApi}>Call API</button>
          </div>
        </Navbar>
        <h1>Project Dashboard</h1>
        <Dashboard projects={this.state.projects} />
      </div>
    );
  }
}

function callApi() {
  fetch('https://devfund-api.azurewebsites.net/details', { method: 'GET' })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

export default App;
