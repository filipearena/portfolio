import React from "react";
import { Paper } from "@material-ui/core";

export default function NavBar({ activeSection }) {
  const isSectionActive = (link) => {
    if (link === activeSection) {
      return true
    }
    return false
  }

  const scrollTo = (section) => {
    if (document.getElementById(section)) {
      document.getElementById(section).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  return (
    <Paper className="navbar" id="navbar">
      <span onClick={() => scrollTo(1)} className={`link ${isSectionActive(1) ? "active" : ""}`}>HOME</span>
      <span onClick={() => scrollTo(2)} className={`link ${isSectionActive(2) ? "active" : ""}`}>STORY</span>
      <span onClick={() => scrollTo(3)} className={`link ${isSectionActive(3) ? "active" : ""}`}>SKILLS</span>
    </Paper>
  );
}

