import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './HeroElements';
import { Button } from '../Button/Button';
import video from '../../videos/video.mp4';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>

      <HeroContent>
        <HeroH1>Valmore Technologies</HeroH1>
        <HeroP>Business Application Precision</HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            spy={true}
            offset={-80}
            smooth={true}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            darkBg={true}
          >
            Discover More
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
