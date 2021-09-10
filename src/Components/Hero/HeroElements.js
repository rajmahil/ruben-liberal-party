import styled from "styled-components";
import HeroBG from "../../Images/HeroBG.png";
import HeroBGLand from "../../Images/HeroBGLand.png";

export const HeroContainer = styled.div`
  height: 92vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
  background-image: url(${HeroBG});
  background-repeat: no-repeat;
  background-position-x: -375px;

  @media screen and (max-width: 1090px) {
    height: auto;
    background-image: url(${HeroBGLand});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    background-position-y: 400px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 16px;
    background-position-y: 270px;
  }
`;

export const HeroWrap = styled.div`
  max-width: 1290px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1090px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

// export const TopLine = styled.p`
//   color: #b80f0a;
//   font-family: neue-haas-grotesk-text, sans-serif;
//   font-size: 0.8em;
//   line-height: 16px;
//   font-weight: 700;
//   letter-spacing: 1.4px;
//   text-transform: uppercase;
//   margin-bottom: 0px;
// `;

export const HeroImageWrap = styled.div`
  width: 55%;
  height: 100%;
  overflow: none;
  text-align: right;
  align-items: end;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 1090px) {
    width: 100%;
    height: auto;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding-top: 45px;
  }
`;

export const HeroImage = styled.img`
  max-height: 100%;
  position: absolute;
  bottom: 0;
  left: 10;

  @media screen and (max-width: 1090px) {
    position: static;
    left: 0;
    width: 80%;
  }
`;

export const HeroTextWrap = styled.div`
  width: 45%;
  height: auto;
  margin-left: 42px;
  color: #000;
  text-align: left;

  @media screen and (max-width: 1090px) {
    width: auto;
    max-width: 600px;
    padding: 40px 0px;
    margin-left: 0px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 0px;
    max-width: 380px;
  }
`;

export const HeroHeading = styled.h1`
  font-family: neue-haas-grotesk-display, sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 3.2em;
  line-height: 58px;
  font-weight: 900;

  @media screen and (max-width: 620px) {
    font-size: 2.8em;
    line-height: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2em;
    line-height: 44px;
    margin-bottom: 0px;
  }
`;

export const HeroPara = styled.text`
  font-family: neue-haas-grotesk-text, sans-serif;
  font-size: 1em;
  line-height: 30px;
  color: #808080;

  @media screen and (max-width: 480px) {
    font-size: 0.9em;
    line-height: 28px;
  }
`;
export const HeroBtnWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 32px 0px;
`;
