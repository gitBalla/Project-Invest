import React, { useContext } from 'react';
import './projectPage.css';
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
  /*
  const contributorCount = () => {
      var contributorCount = [];
      if (currentProject.contributorList.length > 0) {
        currentProject.contributorList.map((contributor) => {
          if (contributor.length > 0) {
            contributorCount.push(contributor);
          }
        },[])
        return contributorCount.length;
      }
      else {
        return 0;
      }
  };
  */

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
    //setApplicantList(applicantList);
    console.log(currentProject.name, user);
    await fetch(GetApi('projects/applicant'), {
      method: 'PUT',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        // TODO: Pass in the project id
        id: currentProject.id,
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
    console.log(currentProject.name, user);
    await fetch(GetApi('projects/applicant'), {
      method: 'PUT',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        // TODO: Pass in the project id
        id: currentProject.id,
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

  const approveApplicant = (index, applicant) => {
    //remove from applicant list
    /*
    if (applicantCount() === 1) {
      const newAppList = [];
      setApplicantList(newAppList);
    }
    else {
      const newAppList = applicantList.splice(index,1);
      setApplicantList(newAppList);
    }
    */
    const newAppList = applicantList.splice(index,1);
    setApplicantList(newAppList);

    //add to contributor list
    contributorList.push(applicant);
    setContributorList(contributorList);

    handleApprove();
  }
  
  const rejectApplicant = (index) => {
    if (index == 0 && applicantCount() == 1) {
      applicantList.length = 0;
      setApplicantList(applicantList);
    }
    else {
      const newAppList = applicantList.splice(index,1);
      setApplicantList(newAppList);
    }

    handleReject();
  };
  /*
  const approveApplicant = (index) => {
    contributorList.push(applicantList[index]);
    setContributorList(contributorList);
    
    //const newAppList = applicantList.filter((_, i) => i !== index);
    applicantList.splice(index,1);
    setApplicantList(applicantList);
    //handleApprove();
  }

  const rejectApplicant = (index) => {
    const newAppList = applicantList.filter((_, i) => i !== index);
    //const index = applicantList.indexOf(rejectedUser);
    //applicantList.splice(index,1);
    setApplicantList(newAppList);
  }
  
  const handleApprove = async (e) => {
    //move user from applicantList to contributorList
  }
  */

  /*
  function checkForUser(arr, usr) {
    for (int i = 0, i < arr.length, i++) {

    }
  }
  */

  

  const handleApply = async (e) => {
    handleClose();
    if (applicantCount() === 0) {
      applicantList[0] = user;
    }
    else {
      applicantList.push(user);
    }
    setApplicantList(applicantList);
    console.log(currentProject.name, user);
    await fetch(GetApi('projects'), {
      method: 'PUT',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        // TODO: Pass in the project id
        id: currentProject.id,
        username: userProfile.data.username,
        //applicantList: applicantList,
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
              {currentProject.description}{applicantList}
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
                    return <ListItem>{contributor}</ListItem>;
                  })}
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: '100%' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography style={{ color: 'black' }} variant="subtitle1">
                    <EmojiPeopleIcon /> {applicantCount()}{' '}
                    Applicant 
                    {applicantCount() === 1 ? '' : 's'}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {applicantCount() === 0 ? "No applicants" : currentProject.applicantList.map((applicant, index) => {
                    return <ListItem 
                              secondaryAction={user === currentProject.username ? 
                                  <div>
                                    <IconButton edge="end">
                                    <CheckBoxIcon color="success" onClick={() => {approveApplicant(index, applicant)}}/></IconButton>

                                    <IconButton edge="end">
                                    <CancelIcon color="error" onClick={() => {rejectApplicant(index)}}/></IconButton>
                                  </div> : ""}>
                            {applicant},{index}</ListItem>;
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
