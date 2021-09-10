import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  EmailSubContainer,
  EmialSubWrap,
  EmailSubTextWrap,
  SectionHeading,
  SectionSubHeading,
  EmailSubForm,
  InputWrap,
  InputLabel,
  NameTextInput,
  EmailTextInput,
  ZipTextInput,
  SubmitInput,
  ResultMessageWrap,
  SuccessMessage,
  ErrorMessage,
} from "./EmailSubElements";

const EmailSub = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [formSub, setFormSub] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_howj4hs",
        "template_xpvejgb",
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
    <EmailSubContainer>
      <EmialSubWrap>
        <EmailSubTextWrap>
          <SectionHeading>Commit to Vote</SectionHeading>
          <SectionSubHeading>
            Add your name now to show your support for Dr. Ruben Rajakumar in
            Saskatoon West.
          </SectionSubHeading>
        </EmailSubTextWrap>
        <EmailSubForm onSubmit={sendEmail}>
          <InputWrap formSub={formSub}>
            <InputLabel>Your Name</InputLabel>
            <NameTextInput type="text" name="name" required />
          </InputWrap>

          <InputWrap formSub={formSub}>
            <InputLabel>Email Address</InputLabel>
            <EmailTextInput type="email" name="email" required />
          </InputWrap>

          <InputWrap formSub={formSub}>
            <InputLabel>Zip Code</InputLabel>
            <ZipTextInput type="text" name="zip" required />
          </InputWrap>

          <SubmitInput formSub={formSub} type="submit">
            I'M IN!
          </SubmitInput>

          <ResultMessageWrap formSub={formSub}>
            <SuccessMessage successMessage={successMessage}>
              Your form has been Submitted, we'll be in touch shortly!
            </SuccessMessage>
            <ErrorMessage errorMessage={errorMessage}>
              Sorry, Something went wrong!
            </ErrorMessage>
          </ResultMessageWrap>
        </EmailSubForm>
      </EmialSubWrap>
    </EmailSubContainer>
  );
};

export default EmailSub;
