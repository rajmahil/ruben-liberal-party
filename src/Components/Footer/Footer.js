import React from "react";
import Scroll from "react-scroll";
import LogoWhite from "../../Images/LogoWhite.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterSocialWrap,
  FooterSocial,
  FooterLinksWrap,
  FooterCopyrightText,
  FooterLink,
  FooterLogoWrap,
  FooterLogo,
  FooterLinkInpage,
  FooterContactWrap,
  FooterContactLink,
} from "./FooterElements";

const Footer = () => {
  const scroll = Scroll.animateScroll;

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLogoWrap onClick={() => scroll.scrollToTop()} to="/">
          <FooterLogo
            src={LogoWhite}
            alt="Dr. Ruben Rajakumar, Liberal Party Candidate for Saskatoon West"
          />
        </FooterLogoWrap>
        <FooterSocialWrap>
          <FooterSocial
            to={{ pathname: "https://www.facebook.com/DrRubenRajakumar" }}
            target="_blank"
          >
            <FaFacebookSquare size={40} />
          </FooterSocial>
          <FooterSocial
            to={{ pathname: "https://www.instagram.com/rubenrajakumar/" }}
            target="_blank"
          >
            <FaInstagramSquare size={40} />
          </FooterSocial>
          <FooterSocial>
            <FaTwitterSquare size={40} />
          </FooterSocial>
        </FooterSocialWrap>
        <FooterContactWrap>
          <FooterContactLink
            to={{ pathname: "mailto:info@rubenrajakumar.ca" }}
            target="_blank"
          >
            Email: info@rubenrajakumar
          </FooterContactLink>
          <FooterContactLink
            to={{ pathname: "tel:306-954-6829" }}
            target="_blank"
          >
            Phone number: 306-954-6829{" "}
          </FooterContactLink>
          <FooterContactLink>Fax number: 306-956-2501</FooterContactLink>
        </FooterContactWrap>
        <FooterLinksWrap>
          <FooterLinkInpage smooth to="/#aboutRuben">
            About Ruben
          </FooterLinkInpage>
          <FooterLinkInpage smooth to="/#rubensVision">
            Ruben's Vision
          </FooterLinkInpage>
          <FooterLink to="/lawnsign">Get a Lawn Sign</FooterLink>
          <FooterLinkInpage smooth to="/#contactSection">
            Contact Us
          </FooterLinkInpage>
          <FooterLink to="/donate">Donate</FooterLink>
        </FooterLinksWrap>
        <FooterCopyrightText>
          © Copyright 2021. All rights reserved. Authorized by the Official
          Agent for Dr. Ruben Rajakumar.
        </FooterCopyrightText>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
