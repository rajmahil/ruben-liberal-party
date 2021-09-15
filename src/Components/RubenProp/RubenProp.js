import React from "react";
import {
  PropsContainer,
  PropsContentContainer,
  CardsWrap,
  CardsIcon,
  CardsHeading,
  CardsParagrah,
  SectionHeading,
  SectionSubHeading,
  PropsTextWrap,
  PropsCardsWrap,
} from "./RubenPropElements";
import CardsData from "./CardsData";
import { SecButton } from "../ButtonElements";

const RubenProp = () => {
  return (
    <PropsContainer>
      <PropsContentContainer>
        <PropsTextWrap>
          <SectionHeading>A Brighter Future for Our Province</SectionHeading>
          <SectionSubHeading>
            Dr. Ruben promises to bring passion for Saskatchewan that is fueled
            by his desire to create an even brighter future for the people of
            Saskatchewan.
          </SectionSubHeading>
        </PropsTextWrap>
        <PropsCardsWrap>
          {CardsData.map((elem) => (
            <CardsWrap>
              <CardsIcon>{elem.icon}</CardsIcon>
              <CardsHeading>{elem.heading}</CardsHeading>
              <CardsParagrah>{elem.paragraph}</CardsParagrah>
            </CardsWrap>
          ))}
        </PropsCardsWrap>
        <SecButton to="/lawnsign">Get a Lawn Sign</SecButton>
      </PropsContentContainer>
    </PropsContainer>
  );
};

export default RubenProp;
