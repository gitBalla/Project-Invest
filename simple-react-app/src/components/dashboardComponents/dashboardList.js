import React from 'react';
import { Link } from "react-router-dom";
import {
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Accordion,
	AccordionSummary,
	Typography,
	AccordionDetails,
	Card,
	Box,
	CardActionArea,
  } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function DashboardList(props) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			{/**columns refers to how many cards will fit on the screen in each view size */}
			<Grid container padding={{xs:3}} spacing={{ xs: 1 }} columns={{ xs: 1, sm: 8, md: 12, lg: 16, xl: 20 }}>
				{props.projects.map((project) => (
					<Grid xs={2} sm={4} md={4} key={project}>
						<DashboardCard project={project} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export function DashboardCard(props) {
	return(
		<Card sx={{
			margin: 1,
			backgroundColor: 'primary.main',
			'&:hover': {
				backgroundColor: 'primary.light',
			}
			}}>
			<Link to="/projectPage" state={{ currentProject: props.project}} style={{textDecoration: 'none'}}>
			<CardActionArea>		
			<ListItem>
			<ListItemAvatar>
				<Avatar src={props.project.image}/>
			</ListItemAvatar>
			<ListItemText primary={<Typography style={{ color: "black" }}>{props.project.name}</Typography>} secondary={props.project.category}/>
			</ListItem>
			</CardActionArea>	
			</Link>
			<ListItem>
				<Accordion sx={{ width: '100%'}}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} >
						<Typography variant="subtitle2">Description</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant="subtitle2"> {props.project.description} </Typography> <br />
						<Typography /> Launched: {new Date(props.project.dateCreated).toLocaleDateString()}
						<Typography /> Owner: {props.project.username}
					</AccordionDetails>
				</Accordion>
			</ListItem>
		</Card>
	);
}

export default DashboardList;