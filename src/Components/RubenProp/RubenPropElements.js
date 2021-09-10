import styled from "styled-components";

export const PropsContainer = styled.div`
  font-family: neue-haas-grotesk-display, sans-serif;
  padding: 90px;

  @media screen and (max-width: 1090px) {
    padding: 90px 40px;
  }

  @media screen and (max-width: 480px) {
    padding: 90px 16px;
  }
`;
export const PropsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PropsTextWrap = styled.div`
  text-align: center;
  margin-bottom: 28px;
  max-width: 750px;
`;

export const SectionHeading = styled.h2`
  font-weight: 900;
  font-size: 2.4em;
  margin: 0px 0px 3px 0px;

  @media screen and (max-width: 480px) {
    font-size: 1.8em;
  }
`;

export const SectionSubHeading = styled.text`
  font-size: 1em;
  line-height: 24px;

  @media screen and (max-width: 767px) {
    font-size: 0.9em;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const PropsCardsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 42px;

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const CardsWrap = styled.div`
  width: 325px;
  padding: 28px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background: white;
  margin: 10px;
  position: relative;
  top: 0px;
  transition: all ease 0.3s;

  @media screen and (max-width: 1350px) {
    width: 32%;
    min-width: 250px;
  }

  @media screen and (max-width: 1100px) {
    min-width: 350px;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    min-width: 0px;
  }

  &:hover {
    top: -5px;
  }
`;
export const CardsIcon = styled.div`
  font-size: 2em;
  color: #d71920;
`;
export const CardsHeading = styled.h3`
  margin-bottom: 5px;
  margin-top: 5px;
`;
export const CardsParagrah = styled.text`
  font-family: neue-haas-grotesk-text, sans-serif;
  font-size: 0.9em;
  line-height: 24px;
  color: #808080;
`;
