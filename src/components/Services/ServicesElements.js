import styled from 'styled-components';
import { Link } from 'react-scroll';
import service1Image from '../../images/service1.jpg';
import service2Image from '../../images/service2.jpg';
import service3Image from '../../images/service3.jpg';
import service4Image from '../../images/service4.jpg';

export const ServicesContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100vh;
  max-width: 110rem;
  margin: 0 auto;
  padding: 10rem 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TopLine = styled.p`
  color: #f48599;
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 1.4rem;
`;

export const Heading = styled.h1`
  margin-bottom: 2.4rem;
  font-size: 4.8rem;
  line-height: 1.1;
  font-weight: 600;
  color: #010606;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 3.2rem;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 3.5rem;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #050f0f;
  text-align: center;
`;

export const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  position: relative;
  width: 48rem;
  height: 32rem;
  margin: 3rem;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.5);
  border-radius: 1.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &.card1 {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${service1Image});
    background-size: cover;
    background-position: center;
  }

  &.card2 {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${service2Image});
    background-size: cover;
    background-position: center;
  }

  &.card3 {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${service3Image});
    background-size: cover;
    background-position: center;
  }

  &.card4 {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${service4Image});
    background-size: cover;
    background-position: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.05),
      rgba(244, 133, 153, 0.7)
    );
    z-index: 2;
    transition: all 0.5s;
    opacity: 0.1;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover h3 {
    transform: translateY(2.5rem);
  }

  &:hover p {
    transform: translateY(2rem);
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    width: 44rem;
    height: 26rem;
  }

  @media screen and (max-width: 530px) {
    width: 40rem;
    height: 24rem;
  }

  @media screen and (max-width: 480px) {
    width: 38rem;
    height: 22rem;
  }

  @media screen and (max-width: 400px) {
    width: 36rem;
    height: 20rem;
  }

  @media screen and (max-width: 320px) {
    width: 34rem;
    height: 18rem;
  }
`;

export const Content = styled.div`
  padding: 2rem;
  text-align: center;

  & h2 {
    position: absolute;
    top: 0px;
    right: 20px;
    font-size: 11rem;
    color: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }

  & h3 {
    font-size: 4.1rem;
    color: rgba(255, 255, 255, 0.1);
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
    transform: translateY(3.5rem);
    transition: all 0.5s;
  }

  & p {
    font-size: 2.1rem;
    color: white;
    padding-top: 2rem;
    transform: translateY(5rem);
    opacity: 0;
    transition: all 0.5s;
  }

  @media screen and (max-width: 768px) {
    & h2 {
      font-size: 10rem;
    }

    & h3 {
      font-size: 3.8rem;
    }
  }

  @media screen and (max-width: 530px) {
    & h2 {
      font-size: 9rem;
    }

    & h3 {
      font-size: 3.5rem;
    }

    & p {
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 480px) {
    & h2 {
      font-size: 8rem;
    }

    & h3 {
      font-size: 3.2rem;
    }
  }

  @media screen and (max-width: 400px) {
    & h2 {
      font-size: 7.5rem;
    }

    & h3 {
      font-size: 2.8rem;
    }
  }

  @media screen and (max-width: 320px) {
    & h2 {
      font-size: 7rem;
    }

    & h3 {
      font-size: 2rem;
    }
  }
`;

export const ServicesBtnWrap = styled.div`
  margin-top: 5rem;
`;
