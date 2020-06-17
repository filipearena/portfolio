import React from "react";
// import ScrollToSection from "../components/scrollToSection";

export default function Skill({ skillName, percentage }) {
  return (
    <div className="inner-container" style={{ border: '1px solid #000' }}>
      <span className="inner-box-skill">{skillName}</span>
      <div className="inner-box-progress-bar" >
        <div style={{
          display: 'block', height: '20px', width: `${percentage}%`, backgroundColor: 'red'
        }}>{percentage}%</div>
        <div
          style={{
            display: 'block', height: '20px', width: `${100 - percentage}%`, backgroundColor: 'grey'
          }}></div>
      </div>
    </div >
  );
}

