import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-dark text-center text-white py-4 mt-5">
      <Container>
        <p>&copy; {new Date().getFullYear()} Rigiih | Built with 💻</p>
      </Container>
    </footer>
  );
};

export default Footer;
