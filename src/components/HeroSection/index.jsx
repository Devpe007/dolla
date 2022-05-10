import React, { useState } from 'react';

import { Button } from '../ButtonElement';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForwaed,
  FaArrowRight,
} from './styles';

import Video from '../../videos/video.mp4';

function HeroSection() {
  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        />
      </HeroBg>

      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards your next payment.
        </HeroP>

        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            primary="true"
            dark="true"
            smooth
            duration={500}
            spy
            exact="true"
            offset={-80}
          >
            Get started
            {hover ? <ArrowForwaed /> : <FaArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
