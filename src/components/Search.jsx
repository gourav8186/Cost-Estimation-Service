import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect, useRef } from "react";

const Search = () => {
  const [isShow, setIsShow] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchBoxRef = useRef(null);

  const searchShow = () => {
    setIsShow((prevIsShow) => !prevIsShow);
  };
  const searchCollapse = () => {
    setIsShow(false);
  };
  const handleDocumentClick = (event) => {
    if (searchBoxRef.current.contains(event.target)) {
      return;
    }
    setIsShow(false);
    setInputValue("");
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      setIsShow(false);
    };
  }, []);

  return (
    <div className="search px-3">
      <IoSearchOutline className="f_22" onClick={searchShow} />
      <div
        className={`searchBar ${isShow ? "searchShow" : ""}`}
        ref={searchBoxRef}
      >
        <div className="searchText">
          <form
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>
          <span className="closeSearch">
            <IoMdClose onClick={searchCollapse} />
          </span>
        </div>
        <div className="searchContent">
          <p className="bSearch text-center py-3 f_22">
            Start typing to see products you are looking for
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
