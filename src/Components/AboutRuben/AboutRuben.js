import React from "react";
import {
  AboutRubenContainer,
  AboutRubenImg,
  AboutRubenImgWrap,
  AboutRubenTextWrap,
  SectionHeading,
  SectionParagrah,
  TextWrap,
} from "../AboutRuben/AboutRubenElements";
import AboutImage1290 from "../../Images/AboutImage1290.png";

const AboutRuben = () => {
  return (
    <>
      <AboutRubenContainer id="aboutRuben">
        <AboutRubenImgWrap>
          <AboutRubenImg src={AboutImage1290} />
        </AboutRubenImgWrap>
        <AboutRubenTextWrap>
          <TextWrap>
            <SectionHeading>Meet Dr.Ruben Rajakumar </SectionHeading>
            <SectionParagrah>
              Dr. Ruben Rajakumar is a passionate believer who is concerned
              about the social determinants of health, poverty reduction, and
              environmental sustainability. As a medical practitioner, Dr. Ruben
              Rajakumar is currently promoting health care innovations to
              provincial, federal governments, academic institutions, and
              indigenous leaders to improve remote northern and rural health
              services in Saskatchewan. <br />
              <br /> Dr. Ruben's interest in politics stems from his close
              connections with the community and his medical practice in the
              remote and rural areas of Saskatchewan. He attributes his
              involvement in politics and his interest to become MP as a passion
              to do public service which he obtained through his long years of
              medical practice in rural and remote areas.
              <br />
              <br /> Dr. Rajakumar is confident that as a Parliamentarian his
              position will offer him many opportunities to continue public
              service and make Saskatchewan a caring, creative and innovative
              province full of energy.
            </SectionParagrah>
          </TextWrap>
        </AboutRubenTextWrap>
      </AboutRubenContainer>
    </>
  );
};

export default AboutRuben;
