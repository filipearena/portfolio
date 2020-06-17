import React from "react";
// import ScrollToSection from "../components/scrollToSection";

export default function Skill({ skillName, percentage, color }) {
  return (
    <div className="inner-container">
      <span className="inner-box-skill">{skillName}</span>
      <div className="inner-box-progress-bar" >
        <div style={{
          display: 'block', height: '20px', width: `${percentage}%`, backgroundColor: `${color}`
        }}>{percentage}%</div>
        <div
          style={{
            display: 'block', height: '20px', width: `${100 - percentage}%`, backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}></div>
      </div>
    </div >
  );
}

