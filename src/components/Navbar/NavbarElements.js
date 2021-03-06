import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 8rem;
  margin-top: -8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.8s ease;

  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  z-index: 1;
  width: 100%;
  padding: 0 2.4rem;
  max-width: 110rem;
`;

export const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const Img = styled.img`
  width: 11rem;
  height: 9rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.9rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -2.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 8rem;
`;

export const NavLinks = styled(LinkScroll)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.6rem;
  height: 100%;
  cursor: pointer;

  &.active,
  &:hover {
    color: #f48599;
    transition: all 0.3s;
  }
`;
