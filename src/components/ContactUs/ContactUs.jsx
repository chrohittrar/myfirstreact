import React from 'react'
import { Container, TextField, Button, Typography, Box } from "@mui/material";
const ContactUs = () => {
  return (
    <Container maxWidth="sm">
            <Box textAlign="center" mt={5} mb={3}>
                <Typography variant="h4" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="body1">
                    We’d love to hear from you. Please send us a message.
                </Typography>
            </Box>
            <form>
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
                    label="Message"
                    name="message"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                    Submit
                </Button>
            </form>
        </Container>
  )
}

export default ContactUs