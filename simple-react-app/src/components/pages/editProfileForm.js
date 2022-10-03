import React from "react";
import { ListItem, List, TextField, Paper, Button, Typography} from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

const EditProfileForm = () => {
    const navigate = useNavigate();
    // Submit button handling needed!!
    const handleSubmit = async (e) => {
        navigate('/profile');
    };
    return (
    <Container>
        <Typography variant="h4">Edit Profile</Typography>
        <Paper elevation={3} sx={{ width: 1000, margin: 'auto' }}>
            <form onSubmit={handleSubmit}>
                <List>
                    <ListItem>
                        <TextField
                            required
                            label="First Name"
                            defaultValue="" // Take current first name
                            variant="filled"
                            margin='normal'
                            fullWidth />
                    </ListItem>
                    <ListItem>
                        <TextField
                            required
                            label="Last Name"
                            defaultValue="" // Take current last name
                            variant="filled"
                            margin='normal'
                            fullWidth />
                    </ListItem>
                    <ListItem>
                        <TextField
                            required
                            label="Password"
                            type="password"
                            defaultValue="" // Take current password
                            variant="filled"
                            margin='normal'
                            fullWidth />
                    </ListItem>
                    <ListItem>
                        <TextField
                            label="GitHub"
                            defaultValue="" // Take current github link
                            variant="filled"
                            margin='normal'
                            fullWidth />
                    </ListItem>
                    <ListItem>
                        <TextField
                            label="Profile Description"
                            multiline
                            variant="filled"
                            margin='normal'
                            fullWidth />
                    </ListItem>
                    <ListItem>
                        <TextField
                            select
                            label="Profile Status"
                            SelectProps={{
                            native: true,
                            }}
                            variant="filled"
                            margin='normal'
                            sx={{width: '25ch' }}
                        >
                            <option> Public </option>
                            <option> Private </option>
                        </TextField>
                    </ListItem>
                    <ListItem>
                        <Button variant="contained" type="submit">
                            Submit
                        </Button>
                    </ListItem>
                </List>
            </form>
        </Paper>
    </Container>
  );
};

export default EditProfileForm;
