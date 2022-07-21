import React from 'react';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';


const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Experience />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
