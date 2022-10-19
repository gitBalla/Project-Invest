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
			<Grid container padding={{xs:3}} spacing={{ xs: 1, sm: 2}} columns={{ xs: 1, sm: 8, md: 12, lg: 16, xl: 20 }}>
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
										<Typography /> Owner: {project.username}
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