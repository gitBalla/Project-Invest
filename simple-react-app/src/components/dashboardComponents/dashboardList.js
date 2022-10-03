import React from 'react';
import { Media } from 'reactstrap';
import { Link } from "react-router-dom";
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
	CardActions,
	CardActionArea,
	Button
  } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProjectPage from "../projectPagesComponents/projectPage";

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
					<Link to="/projectPage" state={{ currentProject: project}} style={{textDecoration: 'none'}}>
						<CardActionArea>
							<ListItem>
								<ListItemAvatar>
									<Avatar src={project.image}/>
								</ListItemAvatar>
								<ListItemText primary={<Typography style={{ color: "black" }}>{project.name}</Typography>} secondary={project.category} />
							</ListItem>
						</CardActionArea>
					</Link>
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