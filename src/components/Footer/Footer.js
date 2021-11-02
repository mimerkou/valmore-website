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

          <Carrers>
            <CarrerLink to="/careers">Careers</CarrerLink>
          </Carrers>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
