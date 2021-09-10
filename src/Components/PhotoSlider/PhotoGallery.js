import React from "react";
import PhotoSlider from "./PhotoSlider";
import { PhotoGalleryWrap } from "./PhotoSliderElements";

const PhotoGallery = () => {
  return (
    <PhotoGalleryWrap>
      <PhotoSlider />
    </PhotoGalleryWrap>
  );
};

export default PhotoGallery;
