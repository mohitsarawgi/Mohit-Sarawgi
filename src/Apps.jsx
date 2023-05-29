import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Nav from './components/nav/nav';
import Portfolio from './components/portfolio/portfolio';
import Services from './components/services/services';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
};

export default App;
