import React from 'react';
import '../style/About.css'
import Typewriter from '../components/Typewriter';

function About() {
  return (
    <div>
        <h1>Malia Yraguen</h1>
        <br></br>
        <p>Malia is a fullstack software developer and project manager based in San Diego, CA.</p>
        <div>
          <Typewriter/>
        </div>
    </div>
  );
}

export default About;
