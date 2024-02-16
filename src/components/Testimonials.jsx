import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      profileName: "Sarah N",
      reviewDate: "13/03/2024",
      heading: "Short Description for heading 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas sequi voluptatem.",
    },
    {
      id: 2,
      profileName: "John D",
      reviewDate: "14/03/2024",
      heading: "Short Description for heading 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas sequi voluptatem.",
    },
    {
      id: 3,
      profileName: "Gourav Suthar",
      reviewDate: "14/03/2024",
      heading: "Short Description for heading 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas sequi voluptatem.",
    },
  ];

  const [testimonials, setTestimonials] = useState(testimonialsData);

  useEffect(() => {
    const firstNameDiv = document.getElementById("fullNameDiv");
    if (firstNameDiv) {
      const firstName = firstNameDiv.textContent || firstNameDiv.innerText;
      setTestimonials((prevTestimonials) =>
        prevTestimonials.map((testimonial) => ({
          ...testimonial,
          profileName: firstName,
        }))
      );
    }
  }, []);

  const generateShortName = (fullName) => {
    return fullName.split(" ").map((word) => word[0]).join("");
  };

  const options = {
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    mouseDrag: true,
    autoplayHoverPause: true,
    touchDrag: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      1200: {
        items: 2,
      },
    },
  };

  return (
    <section className="container pb-4">
      <OwlCarousel className="owl-theme" {...options}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="t-Main border p-4">
              <div className="t-head d-flex justify-content-between pb-4">
                <div className="leftPart">
                  <span className="profileText">
                    {generateShortName(testimonial.profileName)}
                  </span>
                  <span className="profileName fw-bold ps-2" id="fullNameDiv">
                    {testimonial.profileName}
                  </span>
                </div>
                <div className="rightPart">
                  <span className="reviewDate f_14">
                    {testimonial.reviewDate}
                  </span>
                </div>
              </div>
              <div className="Comment">
                <h4 className="f_18 fw-bolder">{testimonial.heading}</h4>
                <p>{testimonial.description}</p>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
};

export default Testimonials;
