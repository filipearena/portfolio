import React from "react";
import MediaLinks from "./media-links"
import Presentation from "./presentation"
import Particles from 'react-particles-js';

export default function Section1() {


  return (
    <div id="1" className="section-1">
      <Particles
        canvasClassName="particles"
        height="72vh"
        params={{
          "particles": {
            "number": {
              "value": window.innerWidth <= 760 ? 20 : 30
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />
      <Presentation></Presentation>
      <MediaLinks></MediaLinks>
    </div>
  );
}

