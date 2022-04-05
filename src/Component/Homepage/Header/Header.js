import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import "./Header.css"


const Header = () => {
  const {user, logOut} = UseAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand to="/home" >Bangla Drones</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Link className="header-link px-2" to="/home">Home</Link>
           <Link className="header-link px-2" to="/expertise">Expertise</Link>
            

          </Nav>
          <Nav>
            
            {
              user.email ? <button className="header-link bg-dark logout-btn"  onClick={logOut}>Log-Out</button>
              :
              <Link className="header-link px-2" to="/login">Login</Link>
            }

            
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;