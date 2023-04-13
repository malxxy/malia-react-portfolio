import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">MY</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >Home</Nav.Link>
          <Nav.Link href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >About</Nav.Link>
          <Nav.Link href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Nav.Link>
          <Nav.Link href="#Contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
          <Nav.Link href="https://github.com/malxxy">GitHub</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Nav;