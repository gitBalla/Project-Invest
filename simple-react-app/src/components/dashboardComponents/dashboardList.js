import React from 'react';
import { Media } from 'reactstrap';
import {
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	List,
	Divider,
	Accordion,
	AccordionSummary,
	Typography,
	AccordionDetails,
	Card,
  } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


function DashboardList(props) {
	const dashboardRow = props.projects.map((project) => {
		return (
			<List>
				<Card 
				 sx={{
					flexGrow: 1, 
					backgroundColor: 'primary.main',
					'&:hover': {
						backgroundColor: 'primary.light',
					}
					}}>
					<ListItem>
						<ListItemAvatar>
							<Avatar src={project.image}/>
						</ListItemAvatar>
						<ListItemText primary={project.name} secondary={project.category}/>
						<ListItemText primary={<br></br>} secondary={"Launched: " + new Date(project.dateCreated).toLocaleDateString()}/>
					</ListItem>
					<ListItem>
						<Accordion sx={{ width: '100%'}}>
							<AccordionSummary expandIcon={<ExpandMoreIcon />} >
								<Typography variant="subtitle2">Description</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography variant="subtitle2"> {project.description} </Typography>
							</AccordionDetails>
						</Accordion>
					</ListItem>
				</Card>
				<Divider />
			</List>
		);
	});
	
	return(
		<div className="container">
			<div className="row">
				<Media list>
					{dashboardRow}
				</Media>
			</div>
		</div>
	);
}

export default DashboardList;