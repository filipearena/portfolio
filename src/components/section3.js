import React from "react";
// import ScrollToSection from "../components/scrollToSection"
import SkillList from "./skillList"

export default function Section3() {
  return (
    <div
      id="3"
      style={{
        height: "80vh",
        minHeight: "100%",
        paddingTop: '100px',
        flexGrow: 1,
        backgroundColor: '#101034',
        padding: '0 30px',
      }}
    >
      <div className='flex-container'>
        <div style={{ height: '400px', width: '300px', border: '1px solid #000' }}>Photo of Myself</div>
        <SkillList></SkillList>
      </div>
      {/* <ScrollToSection section={'navbar'}></ScrollToSection> */}
    </div>
  );
}

