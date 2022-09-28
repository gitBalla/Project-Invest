import React from 'react';
import './App.css';
import Dashboard from './components/dashboard.js';
import AppBar from './components/dashboardComponents/appBar.js';


function App() {
  return (
    <div className="App" >
    <AppBar /><br />
    <Dashboard />
  </div>
  )
}


export default App;
