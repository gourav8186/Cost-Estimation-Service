import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";


const Slider = ({images}) => {
  return (
    <Carousel className="sliderBox">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="slider d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
