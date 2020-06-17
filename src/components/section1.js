import React from "react";
import MediaLinks from "./media-links"
import Presentation from "./presentation"

export default function Section1() {
  return (
    <div id="1" className="section-1">
      <div>
        <Presentation></Presentation>
        <MediaLinks></MediaLinks>
      </div>
    </div>
  );
}

