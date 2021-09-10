import styled from "styled-components";
import { Link as LinkFooter } from "react-router-dom";
import { Link as LinkSocial } from "react-router-dom";
import { Link as LinkLogoFooter } from "react-router-dom";
import { HashLink as LinkInpage } from "react-router-hash-link";

export const FooterContainer = styled.div`
  /* width: 100%; */
  padding: 45px 100px;
  display: flex;
  justify-content: center;
  background: #000;
  font-family: neue-haas-grotesk-display, sans-serif;

  @media screen and (max-width: 1090px) {
    padding: 45px 40px;
  }

  @media screen and (max-width: 480px) {
    padding: 45px 16px;
  }
`;

export const FooterLogoWrap = styled(LinkLogoFooter)``;

export const FooterLogo = styled.img`
  width: 350px;
  margin-bottom: 24px;

  @media screen and (max-width: 767px) {
    width: 250px;
  }
`;

export const FooterWrap = styled.div`
  text-align: center;
`;

export const FooterLink = styled(LinkFooter)`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
  margin-left: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #d71920;
  }

  @media screen and (max-width: 575px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

export const FooterLinkInpage = styled(LinkInpage)`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
  margin-left: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #d71920;
  }

  @media screen and (max-width: 575px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

export const FooterSocialWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const FooterSocial = styled(LinkSocial)`
  margin-left: 5px;
  margin-right: 5px;
  color: white;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #d71920;
  }
`;

export const FooterLinksWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 45px;

  @media screen and (max-width: 575px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const FooterContactWrap = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 24px;
`;

export const FooterContactLink = styled.text`
  color: #fff;
  text-decoration: none;
  margin-bottom: 18px;
`;

export const FooterCopyrightText = styled.text`
  color: #fff;
`;
