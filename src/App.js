import React, { Component } from 'react';

import Header from './components/header';
// import Slider from './components/slider';
import About from './components/about';
import Works from './components/works';
import Skills from './components/skills';
import Process from './components/process';
import Resume from './components/resume';
// import Process from './components/process';
// import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
     <div className="App">

        <div className="navbar navbar-transparent navbar-fixed-top">
          <Header /> 
        </div>
        

       
          <About />

          <Works />
          <Skills />
          <Resume />
          <Process />
          <Footer />
       
     </div>
    );
  }
}

export default App;
