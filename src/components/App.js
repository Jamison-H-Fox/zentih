import React from "react";
import Header from "./Header";
import Top from "./Top";
import Services from "./Services";
import SpacerImage from "./SpacerImage";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";
import { docData } from "../data/data";
import '../App.css';

function App() {

  (() => {
    document.querySelector('title').textContent = docData.siteTitle;
    const headTitle = document.querySelector('head');
      const setFavicon = document.createElement('link');
      setFavicon.setAttribute('rel','shortcut icon');
      setFavicon.setAttribute('href',docData.faviconURL);
      headTitle.appendChild(setFavicon);
  })();  

  return (
    <div className="App">
      <Header />
      <Top />
      <About />
      <SpacerImage />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
