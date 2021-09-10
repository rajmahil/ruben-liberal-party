import React from "react";
import Images from "./SliderPhotos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SliderImage, SliderImageWrap } from "./PhotoSliderElements";

const PhotoSlider = () => {
  const deviceType = window.navigator.userAgent;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={false}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={deviceType !== "true" ? true : false}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="0.3s ease-in-out"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["desktop"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {Images.map((image) => (
        <SliderImageWrap>
          <SliderImage src={image} />
        </SliderImageWrap>
      ))}
    </Carousel>
  );
};

export default PhotoSlider;
