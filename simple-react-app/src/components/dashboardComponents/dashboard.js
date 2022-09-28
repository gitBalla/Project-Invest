import React from 'react';
import './dashboard.css';
import { Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DashboardList from './dashboardList';
import useFetch from "react-fetch-hook";


function Dashboard() {
	const projects = useFetch("https://devfund-api.azurewebsites.net/api/projects");

	/** Displays status of get call*/
	if (projects.error) {
	  return (<p>Error: {projects.error.name}</p>);
	}
	if (projects.isLoading) {
	  return (<p>Loading...</p>)
	}
	return (
		<div>
			<h3>Project Dashboards</h3>
			<br />
			<Grid container spacing={2} backgroundColor="aliceBlue">
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
			</Grid>
		</div>
	);
}

export default Dashboard;