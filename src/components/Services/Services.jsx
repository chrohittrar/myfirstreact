import React from "react";
import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";

const services = [
    { title: "Web Development", description: "High-quality websites tailored to your needs." },
    { title: "Mobile Apps", description: "Custom mobile applications for Android and iOS." },
    { title: "UI/UX Design", description: "Designing intuitive user interfaces and experiences." },
    { title: "SEO Optimization", description: "Boost your website's visibility in search engines." }
];

const Services = () => {
    return (
        <Container maxWidth="lg">
            <Box textAlign="center" mt={5} mb={3}>
                <Typography variant="h4" gutterBottom>
                    Our Services
                </Typography>
                <Typography variant="subtitle1">
                    We offer a wide range of services to help you succeed.
                </Typography>
            </Box>
            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {service.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Services;
