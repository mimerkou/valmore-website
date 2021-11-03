import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Copyright from '../components/Copyright/Copyright';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Services from '../components/Services/Services';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;
