import React from "react";
import logo from "../assets/logo.png";
import Search from "./Search";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const boxRef = useRef(null);

  const searchShow = () => {
    setIsShow((prevIsShow) => !prevIsShow);
  };
  const handleDocumentClick = (event) => {
    if (boxRef.current.contains(event.target)) {
      return;
    }
    setIsShow(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      setIsShow(false);
    };
  }, []);

  return (
    <header className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
      <figure className="logo mb-0">
        <img src={logo} alt="logo" />
      </figure>
      <div className="rightPart d-flex">
        <nav className={`${isShow ? "resNav" : ""}`} ref={boxRef}>
          <ul className="d-flex ps-0 my-0">
            <li className="mLogo">
              <figure className="logo mb-0">
                <img src={logo} alt="logo" />
              </figure>
            </li>
            <li>Home</li>
            <li>Spare Parts</li>
            <li>Accessories</li>
            <li>Support</li>
            <li>About Us</li>
          </ul>
        </nav>

        <Search />
        <RxHamburgerMenu className="hamIcon f_26 pt-1" onClick={searchShow} />
      </div>
    </header>
  );
};

export default Header;
