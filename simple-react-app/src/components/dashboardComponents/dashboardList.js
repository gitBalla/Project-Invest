import React from 'react';
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
  } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  

function DashboardList(props) {
		return (
			<Box sx={{ flexGrow: 1 }}>
      			<Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }}>
					{props.projects.map((project) => (
						<Grid xs={2} sm={4} md={4} key={project}>
							<Card sx={{
									margin: 1,
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
								</ListItem>
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