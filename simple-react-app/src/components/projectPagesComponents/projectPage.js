import React from "react";
import './projectPage.css';
import {Button, Typography, Box} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import GroupIcon from '@mui/icons-material/Group';
import { useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ProjectPage() {
    
    const location = useLocation();
    const { currentProject } = location.state;


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return(
		<div key={currentProject.id} align='left'>

            <Box m={3} sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn="span 12">
                        <Typography style={{color: "black"}} variant="h3">{currentProject.name}</Typography>
                    </Box>
                    <Box gridColumn="span 12">
                        <Typography style={{color: "black"}} variant="subtitle1"><AccountCircleIcon/> Jane Doe</Typography>
                        <Typography style={{color: "black"}} variant="subtitle1"><LocalOfferOutlinedIcon/> {currentProject.category} </Typography>
                    </Box>
                    <Box gridColumn="span 8">
                        <Typography style={{color: "black"}} variant="body1">{currentProject.description}</Typography>
                    </Box>
                    <Box gridColumn="span 4">
                        <Typography style={{color: "black"}} variant="subtitle1"><BookmarkBorderIcon/> 32 bookmarks</Typography>
                        <Typography style={{color: "black"}} variant="subtitle1"><GroupIcon/> 75 applicants</Typography>
                    </Box>
                    <Box gridColumn="span 12">
                    <Button variant="contained" onClick={handleClickOpen}>Apply</Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Apply</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    To apply for this project, please leave a comment for the approver.
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Comment"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose}>Apply</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Box>
            </Box>
        </div>
	);
}

export default ProjectPage;