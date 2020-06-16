import React from "react";
// import ScrollToSection from "../components/scrollToSection";

export default function Skill({ skillName, percentage }) {
  return (
    <div className="inner-flex-container" style={{ width: '100%' }}>
      <span style={{ display: 'block', width: '15%' }}>{skillName}</span>
      <div style={{
        display: 'block', height: '20px', width: `${percentage}%`, backgroundColor: 'red'
      }}></div>
    </div>
  );
}

