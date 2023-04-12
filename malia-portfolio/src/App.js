import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Type from "./components/Typewriter";
import Loading from "./components/Loading";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Type />
      <div className="container" >
        <Projects />
      </div>
      < Loading />
      <Footer />
    </div>

  );
}

export default App;
