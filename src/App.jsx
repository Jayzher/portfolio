import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Sidebar from './components/SideBar';
import { Element } from 'react-scroll';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Testimonials from './sections/Testimonials';
import Technologies from './sections/Technologies';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex grow-0 shrink-0 overflow-hidden">
          <Sidebar />
          <main id="scroll-container" className="flex-1 p-6 h-[100vh] xl:ml-[5vw] justify-center overflow-y-auto">
            <Element name="home" id="home">
              <Home />
            </Element>
            <Element name="about" id="about">
              <About />
            </Element>
            <Element name="projects" id="projects">
              <Projects />
            </Element>
            <Element name="skills" id="skills">
              <Skills />
            </Element>
            <Element name="technologies" id="technologies">
              <Technologies />
            </Element>
            <Element name="testimonials" id="testimonials">
              <Testimonials />
            </Element>
            <Element name="contact" id="contact">
              <Contact />
            </Element>
          </main>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App