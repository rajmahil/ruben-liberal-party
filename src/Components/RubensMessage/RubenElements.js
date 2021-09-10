import styled from "styled-components";

export const MessageContainer = styled.div`
  width: auto;
  font-family: neue-haas-grotesk-display, sans-serif;
  background: #d71920;
  padding: 90px;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1090px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: 475px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const MessageWrap = styled.div`
  max-width: 1000px;
`;

export const SectionHeading = styled.h2`
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 900;
  font-size: 2.6em;
  margin: 0px 0px 10px 0px;

  @media screen and (max-width: 480px) {
    font-size: 1.8em;
  }
`;

export const SectionParagrah = styled.text`
  font-family: neue-haas-grotesk-text, sans-serif;
  font-size: 1em;
  line-height: 30px;

  @media screen and (max-width: 767px) {
    font-size: 0.9em;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const SignatureWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignatureImage = styled.img`
  width: 350px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

export const SignatureText = styled.text`
  font-size: 1.6em;
  font-weight: 600;
`;

export const SignatureSubText = styled.text`
  font-size: 1.1em;
`;
