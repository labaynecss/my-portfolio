import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";

import { Contact } from "./components/Contact";

import { Footer } from "./components/Footer";
import Project from "./components/Project";
const App = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <div>
        <About />
      </div>
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
