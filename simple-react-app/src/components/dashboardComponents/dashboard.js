import React, { useContext } from 'react';
import './dashboard.css';
import { Box, CircularProgress, Tab, Tabs, Typography } from '@mui/material';
import DashboardList from './dashboardList';
import useFetch from 'react-fetch-hook';
import { GetApi } from '../utilityComponents/currentAPI';
import { UserContext } from '../../App';


function Dashboard() {
  const { isLoggedIn, user } = useContext(UserContext);
  const projects = useFetch(GetApi('projects'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <h3>Project Dashboard</h3>
      <br />
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="All Projects" />
            <Tab label="My Projects" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <DashboardList projects={projects.data} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {isLoggedIn === true && (
          <DashboardList projects={projects.data.filter(
            (item) => item.username === user
            )} />
          )}
          {isLoggedIn === false && (
            <div>
              Browse all projects or click the account icon to login and get more features
            </div>
          )}
        </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default Dashboard;
