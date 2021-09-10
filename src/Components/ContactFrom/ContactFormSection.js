import React from "react";
import ContactForm from "./ContactForm";
import {
  ContactFormContainer,
  SectionHeading,
  SectionSubHeading,
  ContactTextWrap,
  ContactFormWhite,
} from "./ContactFormElements";

const ContactFormSection = () => {
  return (
    <ContactFormContainer id="contactSection">
      <ContactFormWhite>
        <ContactTextWrap>
          <SectionHeading>Let's Talk!</SectionHeading>
          <SectionSubHeading>
            Submit the form below and we'll be in touch within 24 hours!
          </SectionSubHeading>
        </ContactTextWrap>
        <ContactForm />
      </ContactFormWhite>
    </ContactFormContainer>
  );
};

export default ContactFormSection;
