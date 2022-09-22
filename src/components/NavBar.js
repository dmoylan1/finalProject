import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>BettaDirect</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
            <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
            <Nav.Link as={Link} to={'/pricing'}>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;