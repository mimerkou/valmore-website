import React from 'react';
import {
  ServicesContainer,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  CardBox,
  Card,
  Content,
  ServicesBtnWrap,
} from './ServicesElements';
import { Button } from '../Button/Button';
import 'aos/dist/aos.css';

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <TextWrapper
          data-aos="fade-up"
          data-aos-easing="linear"
          // data-aos-duration="500"
          data-aos-once="true"
        >
          <TopLine>Services</TopLine>
          <Heading>The path to your success</Heading>
          <Subtitle>Our secret is inspiration by customer success.</Subtitle>
        </TextWrapper>

        <CardBox>
          <Card className="card1" data-aos="zoom-in" data-aos-once="true">
            <Content>
              <h2>01</h2>
              <h3>
                Requirement
                <br />
                analysis
              </h3>
              <p>You speak - we listen.</p>
            </Content>
          </Card>

          <Card
            className="card2"
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-once="true"
          >
            <Content>
              <h2>02</h2>
              <h3>
                Functional
                <br />
                Consultancy
              </h3>
              <p>We propose - you select.</p>
            </Content>
          </Card>
        </CardBox>

        <CardBox>
          <Card
            className="card3"
            data-aos="zoom-in"
            // data-aos-delay="500"
            data-aos-once="true"
          >
            <Content>
              <h2>03</h2>
              <h3>
                Implementation
                <br />
                Design
              </h3>
              <p>We design - you approve.</p>
            </Content>
          </Card>

          <Card
            className="card4"
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-once="true"
          >
            <Content>
              <h2>04</h2>
              <h3>
                Deployment
                <br />& Reiteration
              </h3>
              <p>
                We build - you use.
                <br />
                We rebuild. If we have to.
              </p>
            </Content>
          </Card>
        </CardBox>

        <ServicesBtnWrap
          data-aos="zoom-in"
          data-aos-delay="280"
          data-aos-once="true"
        >
          <Button
            to="contact"
            smooth={true}
            spy={true}
            // duration={500}
            offset={-80}
            darkBg={false}
          >
            Reach Out Now
          </Button>
        </ServicesBtnWrap>
      </ServicesContainer>
    </>
  );
};

export default Services;
