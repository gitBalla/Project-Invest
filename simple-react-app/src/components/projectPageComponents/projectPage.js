import React, { useContext } from "react";
import './projectPage.css';
import {Button, Typography, Box, ListItem, Card, Accordion, AccordionSummary, AccordionDetails, List} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import GroupIcon from '@mui/icons-material/Group';
import { useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { UserContext } from '../../App';
import useFetch from 'react-fetch-hook';
import { GetProfile } from "../utilityComponents/user";
import { GetApi } from '../utilityComponents/currentAPI';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Handshake } from "@mui/icons-material";

function ProjectPage() {
    
    const location = useLocation();
    const { currentProject } = location.state;

    const { isLoggedIn, user } = useContext(UserContext);
    const userProfile = GetProfile(user);
    
    const [applicantList, setApplicantList] = React.useState(currentProject.applicantList);
    const [applyDisabled, setApplyDisabled] = React.useState(true);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    /*
    const disableApplyButton = () => {
        if (isLoggedIn) {
            if (currentProject.applicantList.includes(userProfile.data.username)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    */

    const zeroApplicantsCheck = () => {
        if (currentProject.applicantList.length == 1) {
            if (currentProject.applicantList[0] == "") {
                return true;
            }
            else {
                return false;
            }
        }
    }
    /*
    const userIsOwner = () => {
        if (currentProject.username === (userProfile.data.username)) {
            return true;
        }
        else {
            return false;
        }
    }
    */
    const applyToProject = () => {
        //set applicantList as the current Applicant List
        handleClickOpen();
        setApplicantList(currentProject.applicantList);
    };

    const handleApply = async (e) => {
        handleClose();
        applicantList.push(userProfile.data.username)
        setApplicantList(applicantList);
        await fetch(GetApi('projects'), {
            method: 'PUT',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*', 
            },
            body: JSON.stringify({
                applicantList: applicantList,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
            alert(data.error);
            }
            console.log(data);
        });
    };

    return(
		<div key={currentProject.id} align='left'>

            <Box m={3} sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn="span 12">
                        <Typography style={{color: "black"}} variant="h3">{currentProject.name}</Typography>
                    </Box>
                    <Box gridColumn="span 8">
                        <Typography style={{color: "black"}} variant="subtitle1"><AccountCircleIcon/> {currentProject.username}</Typography>
                        <Typography style={{color: "black"}} variant="subtitle1"><LocalOfferOutlinedIcon/> {currentProject.category} </Typography>
                    </Box>
                    <Box gridColumn="span 4">
                    <Typography style={{color: "black"}} variant="subtitle1"><BookmarkBorderIcon/> Bookmarks</Typography>
                    </Box>
                    <Box gridColumn="span 8">
                        <Typography style={{color: "black"}} variant="body1">{currentProject.description}</Typography>
                    </Box>
                    <Box gridColumn="span 4">
                        <Card sx={{ width: '75%'}}>
                            <Accordion sx={{ width: '100%'}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                    <Typography style={{color: "black"}} variant="subtitle1"><GroupIcon/> {currentProject.contributorList.length} Contributor{currentProject.contributorList.length == 1 ? '' : 's'}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {currentProject.contributorList.map(contributor => {
                                        return (
                                            <ListItem>
                                                {contributor}
                                            </ListItem>
                                        );
                                    })}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ width: '100%'}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                    <Typography style={{color: "black"}} variant="subtitle1"><EmojiPeopleIcon/> {currentProject.applicantList.length} Applicant{currentProject.applicantList.length == 1 ? '' : 's'}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {currentProject.applicantList.map(applicant => {
                                        return (
                                            <ListItem>
                                                {applicant}
                                            </ListItem>
                                        );
                                    })}
                                </AccordionDetails>
                            </Accordion>
                        </Card>
                    </Box>
                    <Box gridColumn="span 12">
                    <Button variant="contained" onClick={applyToProject} disabled={!isLoggedIn} >Apply</Button>
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
                                <Button onClick={handleApply}>Apply</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Box>
            </Box>
        </div>
	);
}

export default ProjectPage;