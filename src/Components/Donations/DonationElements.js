import styled from "styled-components";
import donateBackground from "../../Images/donateBackground.jpg";

export const DonationsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-image: url(${donateBackground});
  background-size: cover;
  background-position: center;
  padding-bottom: 90px;
`;

export const DonationsWrap = styled.div`
  height: 100vh;
  width: 500px;
  padding-left: 70px;
  margin-top: 150px;

  @media screen and (max-width: 767px) {
    padding: 0px;
    width: auto;
    min-width: 350px;
    height: 900px;
    margin-top: 50px;
  }

  @media screen and (max-width: 370px) {
    min-width: auto;
    height: 1100px;
  }
`;
