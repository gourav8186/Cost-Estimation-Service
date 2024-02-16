import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="d-flex flex-column align-items-center justify-content-center border bordre-top py-4">
      <div className="socialLinks">
        <ul className="ps-0 d-flex">
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
      <div className="taglineText">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          eaque, voluptas, optio voluptatem harum eum illum,
        </p>
      </div>

      <div className="contact">
        <ul className="ps-0 d-flex flex-column text-center">
          <li>
            <BsFillTelephoneFill />
            <a href="tal:" className="px-2">
              9024818628
            </a>
          </li>
          <li>
            <CiMail />{" "}
            <a href="mailto:" className="px-2">
              gouravsuthar564@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
