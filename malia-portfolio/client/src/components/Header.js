import React from 'react';
import '../style/Header.css'

const styles = {
  headingStyle: {
    fontSize: '100px',
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
    </header>
  );
}

export default Header;