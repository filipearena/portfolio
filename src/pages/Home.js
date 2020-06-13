import React, { useState, useEffect } from "react";

export default function Home() {
  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    setShowTitle(true);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div>
        <h1 className={`title ${showTitle ? "shown" : ""}`}>
          Welcome to my page
        </h1>
        <h2 className={`subTitle ${showTitle ? "shown" : ""}`}>
          My name is Filipe Arena
        </h2>
        <h3
          style={{ marginTop: 15 }}
          className={`suggestion ${showTitle ? "shown" : ""}`}
        >
          <i>
            I'm a <u>Web Developer</u> with experience in React, VueJS and AngularJS and more
          </i>
        </h3>
      </div>
    </div>
  );
}
