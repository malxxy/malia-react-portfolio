import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    <h1 className="bg-night h-200 text-flash static top-0">Malia Yraguen</h1>
    // <div className="bg-light">
    //   <div>
    //     <a href="#home">MY</a>
    //     <div className="me-auto">
    //       <a href="#home"
    //         onClick={() => handlePageChange('Home')}
    //         className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
    //       >Home</a>
    //       <a href="#about"
    //         onClick={() => handlePageChange('About')}
    //         className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
    //       >About</a>
    //       <a href="#Portfolio"
    //         onClick={() => handlePageChange('Portfolio')}
    //         className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
    //           Portfolio</a>
    //       <a href="#Contact"
    //         onClick={() => handlePageChange('Contact')}
    //         className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
    //           Contact</a>
    //       <a href="https://github.com/malxxy">GitHub</a>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Nav;