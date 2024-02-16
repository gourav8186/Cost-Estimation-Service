import React from "react";
import faIcon from "../assets/icons/best-seller.png";
import faIcon2 from "../assets/icons/service-center.png";
import faIcon3 from "../assets/icons/maintenance.png";

const Facility = () => {
  return (
    <section className="container">
      <div className="row py-3">
        <div className="col-lg-4 p-2">
          <div className="facility p-3 text-center d-flex flex-column align-items-center">
            <div className="fa_Icon">
              <img src={faIcon} className="w-100" alt="best Quality" />
            </div>
            <h4 className="f_26 fw-bold py-2">Best Quality</h4>
            <p>
              We Provide the best quality mobile parts that perform as like as
              orignal.
            </p>
          </div>
        </div>
        <div className="col-lg-4 p-2">
          <div className="facility p-3 text-center d-flex flex-column align-items-center">
            <div className="fa_Icon">
              <img src={faIcon2} className="w-100" alt="best Quality" />
            </div>
            <h4 className="f_26 fw-bold py-2">Service Centers</h4>
            <p>
              Click here and find your service center in your city.
            </p>
          </div>
        </div>
        <div className="col-lg-4 p-2">
          <div className="facility p-3 text-center d-flex flex-column align-items-center">
            <div className="fa_Icon">
              <img src={faIcon3} className="w-100" alt="best Quality" />
            </div>
            <h4 className="f_26 fw-bold py-2">Let's Talk</h4>
            <p>
              Click here to Solve your functional setting issues!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
