import React from 'react';
import '../style/Projects.css';

export default function Projects(props) {
  return (
      <div
        className="card">
        <h1 className="title">{props.title}</h1>
        <p className="description">{props.description}</p>
        <div className="button-box">
          <button className="view">View project</button>
        </div>
      </div>
  );
}

