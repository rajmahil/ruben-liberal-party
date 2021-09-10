import styled from "styled-components";

export const EmailSubContainer = styled.div`
  width: 100%;
  display: block;
  justify-content: center;
  background: #d71920;
`;

export const EmialSubWrap = styled.div`
  padding: 50px 0px 50px 0px;

  @media screen and (max-width: 991px) {
    padding: 50px 90px 50px 90px;
  }

  @media screen and (max-width: 480px) {
    padding: 50px 40px 50px 40px;
  }
`;

export const EmailSubTextWrap = styled.div`
  text-align: center;
  margin-bottom: 22px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionHeading = styled.h2`
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 900;
  font-size: 2.6em;
  margin: 0px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 1.8em;
  }
`;

export const SectionSubHeading = styled.text`
  font-family: neue-haas-grotesk-display, sans-serif;
  font-size: 1em;
  line-height: 24px;
  color: #fff;

  @media screen and (max-width: 767px) {
    font-size: 0.9em;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const EmailSubForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 991px) {
    display: block;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;

  display: ${({ formSub }) => (formSub ? "none" : "flex")};
`;

export const InputLabel = styled.text`
  font-family: neue-haas-grotesk-display, sans-serif;
  font-size: 0.8em;
  margin-bottom: 3px;
  color: #fff;
`;

export const NameTextInput = styled.input`
  margin-bottom: 8px;
  height: 45px;
  padding: 0px 12px 0px 12px;
  font-family: neue-haas-grotesk-display, sans-serif;
  border: 2px solid #fff;
  border-radius: 0px;
  margin-right: 10px;
  width: 250px;
  background: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }

  @media screen and (max-width: 991px) {
    width: auto;
  }
`;

export const EmailTextInput = styled.input`
  margin-bottom: 8px;
  height: 45px;
  padding: 0px 12px 0px 12px;
  font-family: neue-haas-grotesk-display, sans-serif;
  border: 2px solid #fff;
  border-radius: 0px;
  margin-right: 10px;
  width: 350px;
  background: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }

  @media screen and (max-width: 991px) {
    width: auto;
  }
`;

export const ZipTextInput = styled.input`
  margin-bottom: 8px;
  height: 45px;
  padding: 0px 12px 0px 12px;
  font-family: neue-haas-grotesk-display, sans-serif;
  border: 2px solid #fff;
  border-radius: 0px;
  margin-right: 10px;
  width: 100px;
  background: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }

  @media screen and (max-width: 991px) {
    width: auto;
  }
`;

export const SubmitInput = styled.button`
  margin-left: auto;
  margin-right: auto;
  font-family: neue-haas-grotesk-display, sans-serif;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0px;
  background: #fff;
  white-space: nowrap;
  padding: 10px 26px;
  color: #d71920;
  outline: none;
  border: 2px solid #fff;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 12px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: none;
    color: #fff;
    border: 2px solid #fff;
  }

  display: ${({ formSub }) => (formSub ? "none" : "block")};
`;

export const ResultMessageWrap = styled.div`
  width: auto;
  text-align: center;
  font-family: neue-haas-grotesk-display, sans-serif;
  background: #000;
  padding: 24px;
  margin-top: 10px;
  display: ${({ formSub }) => (formSub ? "block" : "none")};

  @media screen and (max-width: 767px) {
    padding: 12px;
  }
`;

export const SuccessMessage = styled.text`
  font-family: neue-haas-grotesk-display, sans-serif;
  color: #fff;
  display: ${({ successMessage }) => (successMessage ? "block" : "none")};

  @media screen and (max-width: 767px) {
    font-size: 0.9em;
  }
`;

export const ErrorMessage = styled.text`
  font-family: neue-haas-grotesk-display, sans-serif;
  color: #fff;
  display: ${({ errorMessage }) => (errorMessage ? "block" : "none")};

  @media screen and (max-width: 767px) {
    font-size: 0.9em;
  }
`;
