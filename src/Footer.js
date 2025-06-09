import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-dark text-center text-white py-4 mt-5">
      <Container>
        <div style={{ padding: '20px 5px' }}>@Rigiih {new Date().getFullYear()}</div>
      </Container>
    </footer>
  );
};

export default Footer;
