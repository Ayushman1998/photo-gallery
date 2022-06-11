import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class NavbarComponent extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand
                        as={NavLink}
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Photo-Gallery
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                as={NavLink}
                                to="/"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                Photo
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/aboutUs"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                About Us
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/contactUs"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                Contact Us
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link
                                as={NavLink}
                                to="/login"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                Login
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/signup"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarComponent;
