import {Link, Route} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Login from "../user/Login";
import React from "react";

//import classes from './MainNavigation.module.css'

function MainNavigation(props) {
    return (
        <Navbar bg="light" expand="lg" className="mb-2">
            <Container>
                <Navbar.Brand href="#home">Pros-D</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projects">Alle Projekte</Nav.Link>
                        {!props.loggedIn &&
                            <Nav.Link href="/login">Login</Nav.Link>
                        }
                        {props.loggedIn &&
                            <Nav.Link href="/logout">Logout</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavigation;