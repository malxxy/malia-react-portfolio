import React from 'react';
import '../style/Projects.css';
import DisplayProjects from '../components/displayProjects';

function Portfolio() {
  return (
    <div>
        <h1>Projects</h1>

        <section>
        <DisplayProjects />
        </section>
    </div>
  );
}

export default Portfolio;