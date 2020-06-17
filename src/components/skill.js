import React from "react";
// import ScrollToSection from "../components/scrollToSection";

export default function Skill({ skillName, percentage }) {
  return (
    <div className="inner-container" style={{ border: '1px solid #000' }}>
      <span className="inner-box-skill" style={{ display: 'block', width: '15%' }}>{skillName}</span>
      <div className="inner-box-progress-bar" >
        <div style={{
          display: 'block', height: '20px', width: `${percentage}%`, backgroundColor: 'red'
        }}> </div>
      </div>
    </div>
  );
}

