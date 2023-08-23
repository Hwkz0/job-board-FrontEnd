import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar as BootstrapNavbar} from 'react-bootstrap';
import '../css/Navbar.css';


export default function Navbar() {
    return (
        <BootstrapNavbar collapseOnSelect expand="lg" bg="tertiary" variant="light" className="navbar fixed-top">
            <Container>

                <BootstrapNavbar.Brand as={ Link } to="/" className="navbar-brand text-white">
                    <i>Job Board</i>
                </BootstrapNavbar.Brand>

                <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />

                <BootstrapNavbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                    <Nav>
                        <Nav.Link as={ Link } to="/jobs">
                            Find Jobs
                        </Nav.Link>
                        <Nav.Link as={ Link } to="/login">
                            Login
                        </Nav.Link>
                        <Nav.Link as={ Link } to="/register">
                            Register
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>

            </Container>
        </BootstrapNavbar>
    );
} 