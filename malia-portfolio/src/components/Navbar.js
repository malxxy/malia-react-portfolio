import React from 'react';
import '../style/Navbar.css';

const styles = {
  navbarStyle: {
    background: 'black',
    justifyContent: 'flex-end',
    float: 'right',
  },
};

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
     <a href="/">MY</a>
     <a href="/about">About</a>
     <a href="/portfolio">Portfolio</a>
     <a href="/contact">Contact</a>
     <a href="/github">GitHub</a>
    </nav>
  );
}

export default Navbar;