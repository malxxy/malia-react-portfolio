import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Type from "./components/Typewriter";
import Loading from "./components/Loading";
// import Loading from "./components/Loading";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Type />
      <Footer />
      < Loading />
    </div>
  );
}

export default App;
