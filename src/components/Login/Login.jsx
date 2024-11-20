import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Login = () => {

    return (
        <Container maxWidth="xs">
            <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                justifyContent="center" 
                minHeight="100vh"
            >
                <Typography variant="h5" component="h1" gutterBottom>
                    Login
                </Typography>
                <form style={{ width: "100%" }}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="email"
                       
                        required
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        name="password"
                      
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ marginTop: "1rem" }}
                    >
                        Log in
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
