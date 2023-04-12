import React from 'react';
import '../style/Projects.css';

export default function Card() {
//   const titleRef = useRef(null);
//   const descRef = useRef(null);
//   const buttonRef = useRef(null);

  return (
      <div
        className="card">
        <h1 className="title">
          Project Title
        </h1>
        <p>
          Brief explanation of project.
        </p>
        <div className="button-box">
          <button className="view" >
            View project.
          </button>
        </div>
      </div>
  );
}

