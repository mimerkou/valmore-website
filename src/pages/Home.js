import React, { useState } from 'react';
import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Services from '../components/Services/Services';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Services />
    </>
  );
};

export default Home;
