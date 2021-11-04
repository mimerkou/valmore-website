import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  min-height: 20vh;
  background-color: #505050;
  color: #fff;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 110rem;
  margin: 0 auto;
`;

export const Social = styled.div`
  margin-top: 3rem;
`;

export const SocialText = styled.div`
  font-size: 1.8rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & i {
    color: #fff;
    transition: all 0.3s;
  }

  & i:hover {
    color: #f48599;
  }
`;

export const Facebook = styled.div`
  margin-right: 3rem;
  font-size: 5rem;
`;

export const Linkedin = styled.div`
  font-size: 5rem;
`;

export const Carrers = styled.div`
  margin: 2.5rem 0;
`;

export const CarrerLink = styled(Link)`
  font-size: 1.8rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s;

  /* Color animation */
  /* animation: animateColor 3s infinite;

  @keyframes animateColor {
    0% {
      color: #fff;
    }
    50% {
      color: #f48599;
    }
    100% {
      color: #fff;
    }
  } */
  /* End color animation */

  &:hover {
    color: #f48599;
  }
`;
