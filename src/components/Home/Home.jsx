import React, { useState } from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
const Home = () => {
  const [emps, setEmps] = useState([]);

  const handleButtonClick = () => {
    fetch("http://localhost:7000/getEmp")
      .then((res) => res.json())
      .then((data) => {
        setEmps(data);
      })
      .catch((err) => {
        console.error("Error fetching employees:", err);
      });
  };

  return (
    <div>
      <h1>Home Page</h1>

      <Button color="inherit" onClick={handleButtonClick}>
        GET EMPLOYEES
      </Button>
  

      {emps.length > 0 && (
        <TableContainer component={Paper}>
          <Table  className='container'>
            <TableHead>
              <TableRow >
                <TableCell>Employee ID</TableCell>
                <TableCell>Employee Name</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Job</TableCell>
                <TableCell>Dept No</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {emps.map((emp) => (
                <TableRow key={emp.EMPNO}>
                  <TableCell>{emp.EMPNO}</TableCell>
                  <TableCell>{emp.ENAME}</TableCell>
                  <TableCell>{emp.SAL}</TableCell>
                  <TableCell>{emp.JOB}</TableCell>
                  <TableCell>{emp.DEPTNO}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}

export default Home