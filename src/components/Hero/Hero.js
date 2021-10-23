import React from 'react';
import { HeroContainer, HeroBg, VideoBg } from './HeroElements';
import video from '../../videos/video.mp4';

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
    </HeroContainer>
  );
};

export default Hero;
