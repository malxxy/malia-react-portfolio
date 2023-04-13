import React from 'react';
import '../style/Header.css'

const styles = {
  headingStyle: {
    fontSize: '100px',
  },
  brandStyle: {
    float: 'left',
    padding: 10,
  }
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h5 style={styles.brandStyle}>MY</h5>
    </header>
  );
}

export default Header;