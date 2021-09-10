import styled from "styled-components";
import ContactBg from "../../Images/ContactBg.png";

export const ContactFormContainer = styled.div`
  width: 100%;
  display: block;
  justify-content: center;
  padding: 90px 0px 90px 0px;
  background-image: url(${ContactBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

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

export const ContactFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  width: 420px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    width: auto;
  }
`;

export const InputLabel = styled.text`
  font-family: neue-haas-grotesk-display, sans-serif;
  font-size: 0.8em;
  margin-bottom: 3px;
`;

export const TextInput = styled.input`
  margin-bottom: 8px;
  height: 45px;
  padding: 0px 12px 0px 12px;
  font-family: neue-haas-grotesk-display, sans-serif;
  border: 2px solid #000;
  border-radius: 0px;
  background: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e8e8e8;
  }
`;
export const TextareaInput = styled.textarea`
  margin-bottom: 5px;
  height: 100px;
  border: 2px solid #000;
  border-radius: 0px;
  padding: 12px;
  font-family: neue-haas-grotesk-display, sans-serif;
  background: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e8e8e8;
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
  background: #d71920;
  white-space: nowrap;
  padding: 10px 26px;
  color: #fff;
  outline: none;
  border: 2px solid #d71920;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 12px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
    border: 2px solid #000;
  }
`;

export const ResultMessageWrap = styled.div`
  width: auto;
  text-align: center;
  font-family: neue-haas-grotesk-display, sans-serif;
  background: #ededed;
  padding: 24px;
  margin-top: 10px;
  display: ${({ formSub }) => (formSub ? "block" : "none")};

  @media screen and (max-width: 767px) {
    padding: 12px;
  }
`;

export const SuccessMessage = styled.text`
  font-family: neue-haas-grotesk-display, sans-serif;

  display: ${({ successMessage }) => (successMessage ? "block" : "none")};

  @media screen and (max-width: 767px) {
    font-size: 0.9em;
  }
`;

export const ErrorMessage = styled.text`
  font-family: neue-haas-grotesk-display, sans-serif;
  display: ${({ errorMessage }) => (errorMessage ? "block" : "none")};

  @media screen and (max-width: 767px) {
    font-size: 0.9em;
  }
`;
