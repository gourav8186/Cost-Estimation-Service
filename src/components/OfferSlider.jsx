import React from "react";
import Slider from "./Slider";

const OfferSlider = () => {
  const sliderImages = [
    require("../assets/slider_images/slider2.jpg"),
    require("../assets/slider_images/slider2.jpg"),
    require("../assets/slider_images/slider2.jpg"),
  ];
  return (
    <div>
      <Slider images={sliderImages} />
    </div>
  );
};

export default OfferSlider;
