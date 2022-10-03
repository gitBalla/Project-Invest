import React, { useContext } from 'react';
import './dashboard.css';
import { CircularProgress } from '@mui/material';
import DashboardList from './dashboardList';
import useFetch from 'react-fetch-hook';
import { UserContext } from '../../App';

function Dashboard() {
  const projects = useFetch(
    'https://devfund-api.azurewebsites.net/api/projects'
  ); //http://localhost:1337/api/projects

  const { user, isLoggedIn } = useContext(UserContext);

  console.log(`Dashboard: ${user}, ${isLoggedIn}`);

  // Displays status of get call
  if (projects.error) {
    return (
      <div>
        <p>Error: {projects.error.name}</p>
        <p>Message: {projects.error.message}</p>
        <br />
        <p>Stack: {projects.error.stack}</p>
      </div>
    );
  }
  if (projects.isLoading) {
    return <CircularProgress color="inherit" />;
  }
  // Displays the resulting projects if successful/done loading
  return (
    <div>
      <h3>Project Dashboards</h3>
      <br />
      <DashboardList projects={projects.data} />
    </div>
  );
}

export default Dashboard;
