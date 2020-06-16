import React from "react";
// import ScrollToSection from "../components/scrollToSection";

export default function Section1() {
  return (
    <div id="1" style={{
      height: "70vh",
      minHeight: "100%",
      backgroundImage: "url('http://i.stack.imgur.com/kx8MT.gif')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: '0 30px',
    }}>
      <div
        style={{
          minHeight: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
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

      </div>
      {/* <ScrollToSection section={'2'}></ScrollToSection> */}
    </div>
  );
}

