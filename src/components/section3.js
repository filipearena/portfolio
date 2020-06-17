import React from "react";
// import ScrollToSection from "../components/scrollToSection"
import SkillList from "./skillList"
import ProfilePhoto from "./profilePhoto"

export default function Section3() {
  return (
    <div id="3" className="section-3">
      <div className='flex-container'>
        <ProfilePhoto></ProfilePhoto>
        <SkillList></SkillList>
      </div>
      {/* <ScrollToSection section={'navbar'}></ScrollToSection> */}
    </div>
  );
}

