import React from 'react';
import '../style/Typewriter.css';
import Typewriter from 'typewriter-effect';

const styles = {
    wordStyle: {
      background: 'black',
      color: 'white',
    }
  };
  
function Type() {
    return (
        <Typewriter style={styles.wordStyle}
            options={{
                strings: ['Fullstack Developer.', 'Project Manager.','Content Creator.'],
                autoStart: true,
                loop: true,
            }}
        />
    );
}

export default Type;