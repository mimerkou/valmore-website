import React from 'react';
import {
  AboutContainer,
  AboutWrapper,
  AboutBox,
  TopLine,
  Heading,
  Subtitle,
  ButtonWrap,
  ImgWrap,
  Img,
} from './AboutElements';
import { Button } from '../Button/Button';
import aboutImage from '../../images/about-img.jpg';
import 'aos/dist/aos.css';

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutBox
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <TopLine>About Us</TopLine>
            <Heading>Recognize the feeling?</Heading>
            <Subtitle>
              Bespoke applications often face a very specific problem: bespoke
              as they may claim to be, they struggle to reflect the sponsor’s
              requirements. Why? Because in most cases, a business seeking to
              employ a solution simply dictates requirements directly to the
              implementation team.
            </Subtitle>
            <Subtitle>
              This is the equivalent of a homeowner to-be, explaining to the
              building contractor how to build the house of her dreams.
            </Subtitle>
            <Subtitle>
              If you have ever been let down by such a solution you probably
              know what we are talking about.
            </Subtitle>
            <Subtitle>
              At Valmore, we pride ourselves on spending more time listening to
              you and designing what you need, so that we can spend less time
              building and even less time correcting.
            </Subtitle>
            <ButtonWrap>
              <Button
                to="services"
                primary="true"
                dark="true"
                smooth={true}
                spy={true}
                // duration={500}
                offset={-80}
              >
                View Services
              </Button>
            </ButtonWrap>
          </AboutBox>

          <AboutBox
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <ImgWrap>
              <Img src={aboutImage} alt="About" />
            </ImgWrap>
          </AboutBox>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
