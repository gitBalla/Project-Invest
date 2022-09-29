import React from "react";
import { Button, List, ListItem, Paper, TextField } from "@mui/material"
import Moment from "moment";

const ProjectForm = () => {

  // Project Category
  const [category, setCategory] = React.useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);

  };
  return (
    <div>
      <h3>Add a New Project</h3>
      <Paper elevation={3} sx={{ width:1000, margin:'auto' }}>
        <List>
          <ListItem>
            <TextField
              required
              id="filled-required"
              label="Project Name"
              defaultValue=""
              variant="filled"
              margin='normal'
              fullWidth
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
            />
          </ListItem>
          <ListItem>
            <TextField
              id="filled-select-currency-native"
              select
              label="Native select"
              value={category}
              onChange={handleChange}
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
            <Button>
              Submit
            </Button>
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

export default ProjectForm;