import React, { Component } from 'react';

import Header from './components/header';
import Slider from './components/slider';
import About from './components/about';
import Works from './components/works';
import Skills from './components/skills';
import Process from './components/process';
import Resume from './components/resume';
import Client from './components/client';
import Contact from './components/contact';

// import Process from './components/process';
// import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
     <div className="App">
        
          <Header />       
          <Slider />
          <About />

          <Works />
          <Skills />
          <Resume />
          <Client />
          <Process />
          <Contact />
          <Footer />
       
     </div>
    );
  }
}

export default App;
