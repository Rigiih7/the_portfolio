import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navbar.css'; // Make sure your styles are imported

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // Collapse the navbar after a link is clicked
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      className="navbar-dark-bg"
      expanded={expanded}
      onToggle={() => setExpanded(prev => !prev)}
    >
      <Container>
        <Navbar.Brand className="custom-brand">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-550}
            className="nav-link"
            onClick={handleNavClick}
          >
            Brian Mwirigi
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav">
            {['about', 'skills', 'projects', 'contact'].map(section => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={-100}
                className="nav-link"
                onClick={handleNavClick}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
