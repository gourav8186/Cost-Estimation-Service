import React from "react";
import Slider from "./Slider";

const FirstSlider = () => {
  const sliderImages = [
    require("../assets/slider_images/slider1.jpg"),
    require("../assets/slider_images/slider1.jpg"),
    require("../assets/slider_images/slider1.jpg"),
];
  return (
    <div>
      <Slider images={sliderImages} />
    </div>
  );
};

export default FirstSlider;
