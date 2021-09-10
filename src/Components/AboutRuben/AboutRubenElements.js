import styled from "styled-components";
import AboutImage from "../../Images/AboutImage.png";

export const AboutRubenContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 90px;
  padding-bottom: 90px;
  overflow: hidden;
  background-image: url(${AboutImage});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 1400px) {
    background-position-x: -100px;
  }

  @media screen and (max-width: 1290px) {
    display: flex;
    flex-direction: column;
    padding-left: 90px;
    padding-right: 90px;
    width: auto;
    background: white;
  }

  @media screen and (max-width: 1090px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: 475px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const AboutRubenImg = styled.img`
  display: none;

  @media screen and (max-width: 1290px) {
    display: block;
    width: 100%;
  }
`;

export const AboutRubenImgWrap = styled.div`
  width: 60%;

  @media screen and (max-width: 1290px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const AboutRubenTextWrap = styled.div`
  width: 40%;
  max-width: 550px;
  display: flex;
  padding-left: 40px;
  padding-right: 90px;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 1290px) {
    padding: 0px;
    width: 100%;
    max-width: 100%;
  }
`;

export const SectionHeading = styled.h2`
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 900;
  font-size: 2.6em;
  margin: 0px 0px 10px 0px;

  @media screen and (max-width: 480px) {
    font-size: 1.7em;
  }
`;

export const SectionParagrah = styled.text`
  font-family: neue-haas-grotesk-text, sans-serif;
  font-size: 1em;
  line-height: 30px;
  color: #808080;

  @media screen and (max-width: 767px) {
    font-size: 0.9em;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const TextWrap = styled.div`
  margin-bottom: 24px;
`;
