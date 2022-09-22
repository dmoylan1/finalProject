import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Betta from './../images/betta.png';


function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>
            <img src={Betta} style={{width:40}} />
            BettaDirect
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
            <Nav.Link as={Link} to={'/pricing'}>Pricing</Nav.Link>
            <Nav.Link as={Link} to={'/reviews'}>Reviews</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;