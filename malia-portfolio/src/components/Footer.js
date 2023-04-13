import React from 'react';
import '../style/Footer.css'

const styles = {
  footerStyle: {
    background: 'black',
  },
  footingStyle: {
    fontSize: '100px',
    color: 'white',
  },
};

function Footer() {
  return (
    <footer style={styles.footerStyle} className="header">
      <h5 style={styles.footerStyle}>Wesbite designed and developed by Malia Yraguen</h5>
    </footer>
  );
}

export default Footer;