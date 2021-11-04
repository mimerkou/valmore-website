import React from 'react';
import {
  FooterContainer,
  FooterWrapper,
  Social,
  SocialText,
  SocialIcons,
  Facebook,
  Linkedin,
  Carrers,
  CarrerLink,
} from './FooterElements';
import 'aos/dist/aos.css';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <Social>
            <SocialText>You can find us at:</SocialText>
            <SocialIcons>
              <Facebook>
                <a
                  href="https://www.facebook.com/valmoretechnologies"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
              </Facebook>
              <Linkedin>
                <a
                  href="https://www.linkedin.com/company/valmore-technologies/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </Linkedin>
            </SocialIcons>
          </Social>

          <Carrers
            data-aos="zoom-out-up"
            data-aos-once="true"
            data-aos-duration="1250"
          >
            <CarrerLink to="/careers">We are hiring!</CarrerLink>
          </Carrers>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
