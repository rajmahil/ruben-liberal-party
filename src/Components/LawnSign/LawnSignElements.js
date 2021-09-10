import styled from "styled-components";
import lawnSignBackground from "../../Images/lawnSignBackground.png";

export const LawnSignContainer = styled.div`
  width: 100%;
  display: block;
  justify-content: center;
  padding: 90px 0px;
  overflow: hidden;
  background-image: url(${lawnSignBackground});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 480px) {
    padding: 0px;
    background: #f5f5f5;
  }
`;

export const ContactFormWhite = styled.div`
  background: #fff;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media screen and (max-width: 767px) {
    width: 350px;
    padding: 40px;
  }

  @media screen and (max-width: 480px) {
    width: fit-content;
    box-shadow: none;
  }
`;

export const ContactTextWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 10px;
`;

export const SectionHeading = styled.h2`
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 900;
  font-size: 2.4em;
  margin: 0px 0px 3px 0px;

  @media screen and (max-width: 480px) {
    font-size: 1.8em;
  }
`;

export const SectionSubHeading = styled.text`
  font-family: neue-haas-grotesk-display, sans-serif;
  font-size: 1em;

  @media screen and (max-width: 767px) {
    font-size: 0.9em;
  }

  @media screen and (max-width: 480px) {
  }
`;
