import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import './Navbar.css'; 

const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      className="navbar-dark-bg"
      // You can add style here if needed, but your CSS should cover width and positioning
    >
      <Container>
        <Link to="home" smooth={true} duration={500} offset={-550} className="nav-link"> Brian Mwirigi</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="about" smooth={true} duration={500} offset={-80} className="nav-link">
              About
            </Link>
            <Link to="skills" smooth={true} duration={500} offset={-80} className="nav-link">
              Skills
            </Link>
            <Link to="projects" smooth={true} duration={500} className="nav-link">
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
