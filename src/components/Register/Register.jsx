import React from 'react'
import { TextField, Button, Container, Typography, Box } from "@mui/material";
const Register = () => {
  return (
    <Container maxWidth="sm">
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={5}>
        <Typography variant="h4" gutterBottom>
            Registration
        </Typography>
        <form  style={{ width: "100%" }}>
            <TextField
                label="Name"
                name="name"
                fullWidth
                margin="normal"
                variant="outlined"
                
                required
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
               
                required
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
              
                required
            />
            <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
              
                required
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
            >
                Register
            </Button>
        </form>
    </Box>
</Container>
  )
}

export default Register