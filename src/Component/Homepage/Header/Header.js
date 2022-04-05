import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = UseAuth();
  return (

    
    <Navbar expand={false}>
      <Container fluid >
      <Navbar.Brand className="header-name" to="/home">Bangla Drones</Navbar.Brand>
        <Link className="header-link" to="/homes">
          Home
        </Link>

        {user.email ? (
          <button className="header-link  logout-btn" onClick={logOut}>
            Log-Out
          </button>
        ) : (
          <Link className="header-link px-2" to="/login">
            Login
          </Link>
        )}

        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton >
            <Offcanvas.Title id="offcanvasNavbarLabel">Close</Offcanvas.Title>
            
          </Offcanvas.Header>
          <Offcanvas.Body >
            <Nav className="justify-content-end flex-grow-1 pe-3">
              
              <Link className="header-link px-2" to="/expertise">
                Expertise
              </Link>
              <Link className="header-link px-2" to="/trips">
                TIPS & ARTICLE
              </Link>
              {
                user?.email && <Link className="header-link px-2" to="/orders">
                My-Orders
              </Link>
              }
              {
                user?.email && <Link className="header-link px-2" to="/manageAllOrders">
                Manage-All-Orders
              </Link>
              }
              {
                user?.email && <Link className="header-link px-2" to="/addAnewService">
                Add-A-New-Service
              </Link>
              }
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
