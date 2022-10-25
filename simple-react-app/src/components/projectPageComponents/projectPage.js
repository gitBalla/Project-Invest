import React, { useContext } from 'react';
import './projectPage.css';
import { Link } from 'react-router-dom';
import {
  Button,
  Typography,
  Box,
  ListItem,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
} from '@mui/material';
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
import { GetProfile } from '../utilityComponents/user';
import { GetApi } from '../utilityComponents/currentAPI';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Handshake } from '@mui/icons-material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';

function ProjectPage() {
  const location = useLocation();
  const { currentProject } = location.state;

  const { isLoggedIn, user } = useContext(UserContext);
  const userProfile = GetProfile(user);

  const [applicantList, setApplicantList] = React.useState(
    currentProject.applicantList
  );
  const [contributorList, setContributorList] = React.useState(
    currentProject.contributorList
  );

  const [applyDisabled, setApplyDisabled] = React.useState(true);

  const [open, setOpen] = React.useState(false);

  const [visible, setVisible] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const applyToProject = () => {
    handleClickOpen();
    setApplicantList(currentProject.applicantList);
  };

  const applicantCount = () => {
      var applicantCount = [];
      if (currentProject.applicantList.length > 0) {
        currentProject.applicantList.map((applicant) => {
          if (applicant.length > 0) {
            applicantCount.push(applicant);
          }
        })
        return applicantCount.length;
      }
      else {
        return 0;
      }
  };

  const disableApplyButton = () => {
    if (isLoggedIn) {
      if (user === currentProject.username || applicantList.includes(user)) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return true;
    }
  };

  const handleApprove = async (e) => {
    console.log(currentProject.name, user, applicantList, contributorList);
    await fetch(GetApi('projects/approve'), {
      method: 'PUT',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        // TODO: Pass in the project id
        name: currentProject.name,
        username: currentProject.username,
        image: currentProject.image,
        category: currentProject.category,
        description: currentProject.description,
        dateCreated: currentProject.date,
        applicantList: applicantList,
        contributorList: contributorList,
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

  const handleReject = async (e) => {
    //setApplicantList(applicantList);
    console.log(currentProject.name, user, applicantList);
    await fetch(GetApi('projects/reject'), {
      method: 'PUT',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        // TODO: Pass in the project id
        name: currentProject.name,
        username: currentProject.username,
        image: currentProject.image,
        category: currentProject.category,
        description: currentProject.description,
        dateCreated: currentProject.date,
        applicantList: applicantList,
        contributorList: contributorList,
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

  const approveApplicant = (index, applicant) => {
    const newAppList = applicantList.splice(index,1);
    setApplicantList(newAppList);

    //add to contributor list
    contributorList.push(applicant);
    setContributorList(contributorList);

    handleApprove();
  }
  
  const rejectApplicant = (index) => {
    //removes from applicant list
    const newAppList = applicantList.splice(index,1);
    setApplicantList(newAppList);

    handleReject();
  };

  const handleApply = async (e) => {
    handleClose();
    if (applicantList.length === 0) {
      applicantList[0] = user;
    }
    else {
      applicantList.push(user);
    }
    setApplicantList(applicantList);
    console.log(currentProject.name, user);
    await fetch(GetApi('projects/apply'), {
      method: 'PUT',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        // TODO: Pass in the project id
        name: currentProject.name,
        username: userProfile.data.username,
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

  return (
    <div key={currentProject.id} align="left">
      <Box m={3} sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 12">
            <Typography style={{ color: 'black' }} variant="h3">
              {currentProject.name}
            </Typography>
          </Box>
          <Box gridColumn="span 8">
            <Typography style={{ color: 'black' }} variant="subtitle1">
              <AccountCircleIcon /> {currentProject.username}
            </Typography>
            <Typography style={{ color: 'black' }} variant="subtitle1">
              <LocalOfferOutlinedIcon /> {currentProject.category}{' '}
            </Typography>
          </Box>
          <Box gridColumn="span 4">
            <Typography style={{ color: 'black' }} variant="subtitle1">
              <BookmarkBorderIcon /> Bookmarks
            </Typography>
          </Box>
          <Box gridColumn="span 8">
            <Typography style={{ color: 'black' }} variant="body1">
              {currentProject.description}
            </Typography>
          </Box>
          <Box gridColumn="span 4">
            <Card sx={{ width: '75%' }}>
              <Accordion sx={{ width: '100%' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography style={{ color: 'black' }} variant="subtitle1">
                    <GroupIcon /> {contributorList.length}{' '}
                    Contributor
                    {contributorList.length === 1 ? '' : 's'}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {currentProject.contributorList.map((contributor) => {
                    return <ListItem><Link to="/profile" state={{currentUser: contributor}}>{contributor}</Link></ListItem>;
                  })}
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: '100%' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography style={{ color: 'black' }} variant="subtitle1">
                    <EmojiPeopleIcon /> {applicantList.length}{' '}
                    Applicant 
                    {applicantList.length === 1 ? '' : 's'}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {applicantList.length === 0 ? "No applicants" : currentProject.applicantList.map((applicant, index) => {
                    return <ListItem 
                              secondaryAction={user === currentProject.username ? 
                                  <div>
                                    <IconButton edge="end">
                                    <CheckBoxIcon color="success" onClick={() => {approveApplicant(index, applicant)}}/></IconButton>

                                    <IconButton edge="end">
                                    <CancelIcon color="error" onClick={() => {rejectApplicant(index)}}/></IconButton>
                                  </div> : ""}>
                                  <Link to="/profile" state={{currentUser: applicant}}>{applicant}</Link></ListItem>;
                  })}
                </AccordionDetails>
              </Accordion>
            </Card>
          </Box>
          <Box gridColumn="span 12">
            <Button
              variant="contained"
              onClick={applyToProject}
              disabled={disableApplyButton()}
            >
              Apply
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Apply</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To apply for this project, please leave a comment for the
                  approver.
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
