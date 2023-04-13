import React from 'react';
import '../style/Typewriter.css';
import Typewriter from 'typewriter-effect';

function Type() {
    return (
        <Typewriter
            options={{
                strings: ['Fullstack Developer.', 'Project Manager.','Content Creator.'],
                autoStart: true,
                loop: true,
            }}
        />
    );
}

export default Type;