import React from "react";
import { DonationsWrap, DonationsContainer } from "./DonationElements";
import PaymentForm from "./PaymentForm";

const Donations = () => {
  return (
    <DonationsContainer>
      <DonationsWrap>
        <PaymentForm />
      </DonationsWrap>
    </DonationsContainer>
  );
};

export default Donations;
