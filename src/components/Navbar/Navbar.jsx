import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import Home from "../Home/Home";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    elevate
                </Typography>
                <Box>
                    {/* Using Link to navigate to the home page */}
                    <Button color="inherit">
                        <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
                                Home
                        </Link>
                    </Button>
                    <Button color="inherit" onClick={handleMenuClick}>
                        Menu
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/registration"  style={{ textDecoration: "none", color: "inherit" }}>
                                Registration
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/services" style={{ textDecoration: "none", color: "inherit" }}>
                                Services
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                                Contact Us
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/aboutUs" style={{ textDecoration: "none", color: "inherit" }}>
                                About Us
                            </Link>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
