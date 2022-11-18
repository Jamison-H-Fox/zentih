import React from "react";
import Header from "./Header";
import Top from "./Top";
import Services from "./Services";
import HeroImage from "./HeroImage";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";
import '../App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <Services />
      <HeroImage />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
