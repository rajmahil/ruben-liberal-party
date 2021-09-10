import styled from "styled-components";

export const PhotoGalleryWrap = styled.div`
  width: auto;
  padding: 25px;
  background: #d71920;

  @media screen and (max-width: 480px) {
    padding: 18px;
  }
`;

export const SliderImageWrap = styled.div`
  overflow: hidden;
  height: auto;
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderImage = styled.img`
  width: 100%;
  height: auto;
`;
