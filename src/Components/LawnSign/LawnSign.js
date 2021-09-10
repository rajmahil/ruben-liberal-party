import React from "react";
import ContactForm from "../ContactFrom/ContactForm";
import {
  LawnSignContainer,
  ContactFormWhite,
  ContactTextWrap,
  SectionHeading,
  SectionSubHeading,
} from "./LawnSignElements";

const LawnSign = () => {
  return (
    <LawnSignContainer>
      <ContactFormWhite>
        <ContactTextWrap>
          <SectionHeading>Get a Lawn Sign</SectionHeading>
          <SectionSubHeading>
            Show your support for our movement and campaign by taking a lawn
            sign!
          </SectionSubHeading>
        </ContactTextWrap>
        <ContactForm />
      </ContactFormWhite>
    </LawnSignContainer>
  );
};

export default LawnSign;
