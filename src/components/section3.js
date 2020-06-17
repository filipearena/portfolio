import React from "react";
// import ScrollToSection from "../components/scrollToSection"
import SkillList from "./skillList"
import ProfilePhoto from "./profilePhoto"
import DownloadResume from "./downloadResume"
// import firebase from "@firebase/app"
// var storage = firebase.storage();
// var pathReference = storage.ref('images/stars.jpg');

export default function Section3() {
  return (
    <div id="3" className="section-3">
      <div className='flex-container'>
        <ProfilePhoto></ProfilePhoto>
        <SkillList></SkillList>
        <DownloadResume></DownloadResume>
      </div>
      {/* <ScrollToSection section={'navbar'}></ScrollToSection> */}
    </div>
  );
}

