import React, { useState, useEffect } from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Img,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';
import logo from '../../images/logo-nav-transparent.png';

const Navbar = (props) => {
  const { toggle } = props;

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Img src={logo} alt="Valmore Logo" />
          </NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
