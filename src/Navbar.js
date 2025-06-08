// Navbar.js
import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BootstrapNavbar expand="lg" className="navbar-dark-bg fixed-top">
      <Container>
        <BootstrapNavbar.Brand href="#home" onClick={(e) => handleScroll(e, 'about')} className="fw-bold text-orange">
          Rigiih
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbarScroll" />
        <BootstrapNavbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#about" onClick={(e) => handleScroll(e, 'about')}>About</Nav.Link>
            <Nav.Link href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
