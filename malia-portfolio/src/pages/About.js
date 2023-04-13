import React from 'react';
import '../style/About.css'

function About() {
  return (
    <div>
        <h1>About Malia</h1>
        <br></br>
        {/* <img> profile picture</img> */}
        <p>Malia is a fullstack software developer and project manager based in San Diego, CA.</p>
        <container>
          <ul>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
          <button>Download Resume</button>
        </container>
    </div>
  );
}

export default About;
