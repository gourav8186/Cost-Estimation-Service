import React from "react";
import mobileIcon from "../assets/mobile_brands/apple.webp";
import mobileIcon2 from "../assets/mobile_brands/mi.webp";
import mobileIcon3 from "../assets/mobile_brands/samsung.png.webp";
import mobileIcon4 from "../assets/mobile_brands/vivo.png.webp";

const Mobiles = () => {
  return (
    <section className="container">
      <div className="row py-4">
        <div className="col-lg-3 col-sm-4 col-6 p-3">
          <div className="mbIcon">
            <img src={mobileIcon} alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-6 p-3">
          <div className="mbIcon">
            <img src={mobileIcon2} alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-6 p-3">
          <div className="mbIcon">
            <img src={mobileIcon3} alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-6 p-3">
          <div className="mbIcon">
            <img src={mobileIcon4} alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-6 p-3">
          <div className="mbIcon">
            <img src={mobileIcon} alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-6 p-3">
          <div className="mbIcon">
            <img src={mobileIcon2} alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-6 p-3">
          <div className="mbIcon">
            <img src={mobileIcon3} alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-6 p-3">
          <div className="mbIcon">
            <img src={mobileIcon4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobiles;
