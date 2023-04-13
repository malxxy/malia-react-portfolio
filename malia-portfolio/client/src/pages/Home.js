import React from 'react';
import Type from '../components/Typewriter';

function Home() {
    return (
        <div>
            <h1>Malia Yraguen</h1>
            <container>
                <Type />
            </container>

            <container>
                <button href="#About">Learn More</button>
            </container>
        </div>
    )
};

export default Home;