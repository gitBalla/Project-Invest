import React, { useContext } from 'react';
import { Button, List, ListItem, Paper, TextField } from "@mui/material"
import Moment from "moment";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../App';
import { GetApi } from '../utilityComponents/currentAPI';


const ProjectForm = () => {
  const [projectName, setProjectName] = React.useState("");
  const [projectDescription, setProjectDescription] = React.useState("");
  const [projectCategory, setProjectCategory] = React.useState("");
  const { user } = useContext(UserContext);


  const navigate = useNavigate();

  console.log(projectName, user, projectDescription, projectCategory, Moment().format('DD-MMM-YYYY'));

  // Submit button handling
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(GetApi('projects'), {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        name: projectName,
        username: user,
        image: 'assets/images/logo192.png',
        category: projectCategory,
        description: projectDescription,
        applicantList: [],
        contributorList: [user],
      }),
    })
      .then((res) => res.json())
      .then((data) => {console.log(data);});

    navigate('/Dashboard');
  };

  return (
    <div>
      <h3>Add a New Project</h3>
      <Paper elevation={3} sx={{ width:1000, margin:'auto' }}>
        <form onSubmit={handleSubmit}>
          <List>
            <ListItem>
              <TextField
                disabled
                id="filled-disabled"
                label="Username"
                defaultValue={user}
                variant="filled"
                margin='normal'
              />
            </ListItem>
            <ListItem>
              <TextField
                required
                id="filled-required"
                label="Project Name"
                defaultValue=""
                variant="filled"
                margin='normal'
                fullWidth
                onChange={(e) => setProjectName(e.target.value)}
                />
            </ListItem>
            <ListItem>
              <TextField
                id="filled-textarea"
                label="Project Description"
                placeholder="Placeholder"
                multiline
                variant="filled"
                margin='normal'
                fullWidth
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                id="filled-select-currency-native"
                select
                label="Project Category"
                value={projectCategory}
                onChange={(e) => setProjectCategory(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                variant="filled"
                margin='normal'
                sx={{width: '25ch' }}
              >
                <option> </option>
                <option> Developing </option>
                <option> Investing </option>
              </TextField>
            </ListItem>
            <ListItem>
              <TextField
                disabled
                id="filled-disabled"
                label="Date"
                defaultValue={Moment().format('DD-MMM-YYYY')}
                variant="filled"
                margin='normal'
              />
            </ListItem>
            <ListItem>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </ListItem>
          </List>
        </form>
      </Paper>
    </div>
  );
};

export default ProjectForm;