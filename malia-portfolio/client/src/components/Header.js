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
    </header>
  );
}

export default Header;