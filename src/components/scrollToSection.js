


import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function ScrollToSection({ section }) {

  const scrollTo = () => {
    document.getElementById(`${section}`).scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <FaArrowAltCircleUp onClick={scrollTo} style={{ display: "block" }} className="icon" size={'2em'} />
  );
}

