import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* Logic to display MAIN, ABOUT, PORTFOLIO, or CONTACT */}
      <Main/>
      {/* Main includes */}
        {/* <Type /> + Learn More Button that takes you to About */}
      <About />
      {/* About includes */}
        {/* About, linkedin link, profile picture, description, email, and button to download resume */}
      <Portfolio/>
      {/* Portfolio includes */}
        {/* Reusable cards that display multiple projects with image, clicked upon takes you to project */}
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
