import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = (props) => {
  const { isOpen, toggle } = props;

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={toggle}
          >
            Home
          </SidebarLink>
          <SidebarLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            onClick={toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            onClick={toggle}
          >
            Services
          </SidebarLink>
          <SidebarLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            onClick={toggle}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
