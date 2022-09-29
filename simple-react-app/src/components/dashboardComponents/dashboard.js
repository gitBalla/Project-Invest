import React from 'react';
import './dashboard.css';
import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DashboardList from './dashboardList';
import useFetch from "react-fetch-hook";


function Dashboard() {
	const projects = useFetch("https://devfund-api.azurewebsites.net/api/projects"); //http://localhost:1337/api/projects

	// Displays status of get call
	if (projects.error) {
	  return (
		<div>
			<p>Error: {projects.error.name}</p>
			<p>Message: {projects.error.message}</p><br />
			<p>Stack: {projects.error.stack}</p>
		</div>
	  );
	}
	if (projects.isLoading) {
	  return (<CircularProgress color="inherit" />)
	}
	// Displays the resulting projects if successful/done loading
	return (
		<div>
			<h3>Project Dashboards</h3>
			<br />
			<Grid container spacing={2}>
				<Grid item xs={4}></Grid>
				<Grid backgroundColor="inherit" item xs={4}>
					{/* <h4>Unsorted</h4> */}
					<DashboardList projects={projects.data}/>
				</Grid>
				<Grid item xs={4}></Grid>
			</Grid>
			{/* THE FOLLOWING WILL BE IMPLEMENTED AFTER SORTING FEATURE */}
			{/* <Grid container spacing={2} backgroundColor="aliceBlue">
				<Grid item xs={1}></Grid>

				<Grid item xs={3}>
				<h4>Recent</h4>
				<DashboardList projects={projects.data}/>
				</Grid>

				<Grid item xs={.25}></Grid>
				<Divider orientation="vertical" flexItem sx={{ borderWidth: 5 }} />
				<Grid item xs={.25}></Grid>

				<Grid item xs={3}>
				<h4>Popularity</h4>
				<DashboardList projects={projects.data}/>
				</Grid>

				<Grid item xs={.25}></Grid>
				<Divider orientation="vertical" flexItem sx={{ borderWidth: 5 }} />
				<Grid item xs={.25}></Grid>

				<Grid item xs={3}>
				<h4>Owner</h4>
				<DashboardList projects={projects.data}/>
				</Grid>

				<Grid item xs={1}></Grid>
			</Grid> */}
		</div>
	);
}

export default Dashboard;