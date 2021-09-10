import React, { useState } from "react";
import {
  ContactFormWrap,
  ResultMessageWrap,
  SuccessMessage,
  ErrorMessage,
  InputLabel,
  TextInput,
  TextareaInput,
  SubmitInput,
} from "./ContactFormElements";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [formSub, setFormSub] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_howj4hs",
        "template_6necpio",
        e.target,
        "user_VQLOzSgxNIFSZlXbtfn9f"
      )
      .then((res) => {
        console.log(res);
        setSuccessMessage(true);
        setFormSub(true);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(true);
        setFormSub(true);
      });
  };

  return (
    <ContactFormWrap onSubmit={sendEmail}>
      <InputLabel>Your Name *</InputLabel>
      <TextInput type="text" name="name" required />

      <InputLabel>Your Email *</InputLabel>
      <TextInput type="email" name="email" required />

      <InputLabel>Your Phone *</InputLabel>
      <TextInput type="tel" name="phone" required />

      <InputLabel>Postal Code *</InputLabel>
      <TextInput type="text" name="zip" required />

      <InputLabel>Your Message </InputLabel>
      <TextareaInput name="message" rows="4" />

      <SubmitInput type="submit">Submit</SubmitInput>

      <ResultMessageWrap formSub={formSub}>
        <SuccessMessage successMessage={successMessage}>
          Your form has been Submitted, we'll be in touch shortly!
        </SuccessMessage>
        <ErrorMessage errorMessage={errorMessage}>
          Sorry, Something went wrong!
        </ErrorMessage>
      </ResultMessageWrap>
    </ContactFormWrap>
  );
};

export default ContactForm;
