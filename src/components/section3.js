import React from "react";
import Recommendations from "./recomendations"
import ProfilePhoto from "./profilePhoto"
import DownloadResume from "./downloadResume"

export default function Section3() {
  return (
    <div id="3" className="section-3">
      <div className='flex-container'>
        <ProfilePhoto></ProfilePhoto>
        <Recommendations></Recommendations>
        <DownloadResume></DownloadResume>
      </div>
    </div>
  );
}

