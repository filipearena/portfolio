import React from "react";
// import ScrollToSection from "../components/scrollToSection";

export default function Section2() {
  return (
    <div
      id="2"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        minHeight: "100%",
        flexGrow: 1,
        backgroundColor: '#282c34',
        padding: '0 30px',
      }}
    >
      <div>
        <h1 className={`title show-on-scroll`}>
          Hello, I'm Filipe Arena
      </h1>
        <h3 className={`suggestion show-on-scroll`}>
          <i>
            I'm a <u>Web Developer</u> with experience in React, VueJS and AngularJS and more
        </i>
        </h3>
      </div>
      {/* <ScrollToSection section={'3'}></ScrollToSection> */}
    </div>
  );
}

