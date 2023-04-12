import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Type from "./components/Typewriter";
import Loading from "./components/Loading";
import DisplayProjects from "./components/displayProjects"
import Form from "./components/Form"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Type />
      <About />
      <DisplayProjects />
      <Loading />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
