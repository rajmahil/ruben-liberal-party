import React from "react";
import rubenSignature from "../../Images/rubenSignature.png";
import {
  MessageContainer,
  MessageWrap,
  SectionHeading,
  SectionParagrah,
  SignatureWrap,
  SignatureImage,
  SignatureText,
  SignatureSubText,
} from "./RubenElements";

const RubensMessage = () => {
  return (
    <MessageContainer id="rubensVision">
      <MessageWrap>
        <SectionHeading>A Message from Dr. Ruben</SectionHeading>
        <SectionParagrah>
          Dr. Ruben Rajakumar is excited to serve as the Liberal Party of Canada
          candidate in Saskatoon West. <br />
          <br /> “Saskatchewan is an innovative province with so much
          potential,” said Rajakumar. “After more than 50 years in medicine, I
          am taking this step into politics because I believe in the vision the
          Liberal Party of Canada has for the future of our country and I want
          to bring a positive change to our community.” <br />
          <br />
          Dr. Rajakumar is a cardiologist and began his medical career in Sri
          Lanka before completing post-graduate training in the United Kingdom.
          In 1980, Dr. Rajakumar and his wife Gwen, a family physician, moved to
          Canada where he practiced in Île-à-la-Crosse and Watrous before
          relocating to Saskatoon in 1991.
          <br />
          <br /> Dr. Rajakumar is passionate about improving health care
          services, particularly for rural and remote communities, protecting
          the environment, and making life more affordable for Canadians. He
          also owns a farm in Saskatoon, which he founded to improve food
          security and provide opportunities for sustainable energy.
          <br />
          <br /> “As our country looks to recover from the devastating impacts
          of the COVID-19 pandemic, we need to make bold investments that leave
          no one behind. The federal Liberal government has guided us through
          the greatest challenge in a generation and I believe they are the
          right people to lead our country as we rebuild.” <br />
          <br />
          Dr. Rajakumar is the proud father of three boys.
        </SectionParagrah>
        <SignatureWrap>
          <SignatureImage
            src={rubenSignature}
            alt="Dr. Ruben Rajakumar, Liberal Party Candidate for Saskatoon West"
          />
          <SignatureText>Dr. Ruben Rajakumar</SignatureText>
          <SignatureSubText>Candidate for Saskatoon West</SignatureSubText>
        </SignatureWrap>
      </MessageWrap>
    </MessageContainer>
  );
};

export default RubensMessage;
