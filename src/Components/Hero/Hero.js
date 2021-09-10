import React from "react";
import { MainButton, SecButton } from "../ButtonElements";
import RubenHero from "../../Images/RubenHero.png";
import {
  HeroContainer,
  HeroImageWrap,
  HeroImage,
  HeroTextWrap,
  HeroHeading,
  HeroWrap,
  HeroPara,
  HeroBtnWrapper,
} from "./HeroElements";

const Hero = () => {
  return (
    <>
      <HeroContainer id="home">
        <HeroWrap>
          <HeroImageWrap>
            <HeroImage
              src={RubenHero}
              alt="Dr. Ruben Rajakumar, Liberal Party candidate for Saskatoon West"
            />
          </HeroImageWrap>
          <HeroTextWrap>
            <HeroHeading>
              Heart For Service <br /> Passion For Innovation
            </HeroHeading>
            <HeroPara>Liberal Party Saskatoon West candidate</HeroPara>
            <HeroBtnWrapper>
              <MainButton to="/donate">Donate</MainButton>
              <SecButton to="/lawnsign">Get a Lawn Sign</SecButton>
            </HeroBtnWrapper>
          </HeroTextWrap>
        </HeroWrap>
      </HeroContainer>
    </>
  );
};

export default Hero;
