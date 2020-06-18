import React from "react";
import SectionOneLinks from "./sectionOneLinks"
import Presentation from "./presentation"
import Particles from 'react-particles-js';

export default function Section1() {
  const particleHeight = '70vh';
  const particleParams = {
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
  }

  return (
    <div id="1" className="section-1">
      <Particles
        canvasClassName="particles"
        height={particleHeight}
        params={particleParams} />
      <Presentation></Presentation>
      <SectionOneLinks></SectionOneLinks>
    </div>
  );
}

