import React from 'react';
import '../style/Header.css'

const styles = {
  headerStyle: {
    background: 'black',
  },
  headingStyle: {
    fontSize: '100px',
    color: 'white',
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Malia Yraguen</h1>
    </header>
  );
}

export default Header;