import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />

      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
