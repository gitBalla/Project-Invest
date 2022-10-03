import React from 'react';
import { Media } from 'reactstrap';
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
	CardActions,
	CardActionArea,
	Button
  } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProjectPage from "../projectPagesComponents/projectPage";

function DashboardList(props) {
		return (
			<Box sx={{ flexGrow: 1 }}>
      			<Grid container padding={{xs:3}} spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }}>
					{props.projects.map((project) => (
						<Grid xs={2} sm={4} md={4} key={project}>
							<Card sx={{
									margin: 1,
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
								<ListItemText primary={<Typography style={{ color: "black" }}>{project.name}</Typography>} secondary={project.category}/>
								</ListItem>
								</CardActionArea>	
								</Link>
								<ListItem>
									<Accordion sx={{ width: '100%'}}>
										<AccordionSummary expandIcon={<ExpandMoreIcon />} >
											<Typography variant="subtitle2">Description</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography variant="subtitle2"> {project.description} </Typography> <br />
											<Typography /> Launched: {new Date(project.dateCreated).toLocaleDateString()}
										</AccordionDetails>
									</Accordion>
								</ListItem>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		);
}

export default DashboardList;