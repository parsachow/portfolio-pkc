import React from 'react';

import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import TechSkills from './components/TechSkills/TechSkills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <AboutMe />
        <TechSkills />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
