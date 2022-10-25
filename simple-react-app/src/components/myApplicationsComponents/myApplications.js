import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Box } from '@mui/material';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import useFetch from 'react-fetch-hook';
import { GetApi } from '../utilityComponents/currentAPI';

function MyApplications() {
  const { user } = useContext(UserContext);
  const projects = useFetch(GetApi('projects'));

  return (
    <div>
      <h3>{user}'s Applications</h3>
      <TableContainer justifyContent='center'>
        <Table sx={{ width: '75%' }} >
          <TableHead>
            <TableRow>
              <TableCell>Applicant</TableCell>
              <TableCell>Comment</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                <TableRow>
                <TableCell>FILLER</TableCell>
                <TableCell>FILLER</TableCell>
                <TableCell style={{ width: "10%" }} align="right"><Button variant="contained" color="success">Accept</Button></TableCell>
                <TableCell style={{ width: "10%" }} align="right"><Button variant="contained" color="error">Reject</Button></TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyApplications;