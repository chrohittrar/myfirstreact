import React, { useState } from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Container, Typography, Box } from "@mui/material";

const AboutUs = () => {

    const [rows, setRows] = useState([]);

    const handleGetInfo = () =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setRows(data))
    }

  return (
    <div>
    
    <Button color="inherit" onClick={handleGetInfo}>
        GET INFO
      </Button>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">City</TableCell>
            <TableCell align="left">Company Name</TableCell>
            <TableCell align="left">Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.address.city}</TableCell>
              <TableCell align="left">{row.company.name}</TableCell>
              <TableCell align="left">{row.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default AboutUs