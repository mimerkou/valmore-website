import React from 'react';
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
import logo from '../../images/logo-nav-transparent.png';

const Navbar = (props) => {
  const { toggle } = props;

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
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
                duration={750}
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
                duration={750}
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
                duration={750}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="home"
                activeClass="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={750}
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
