import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand to="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Link to="/home">Home</Link>
            

          </Nav>
          <Nav>
            
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;