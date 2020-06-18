import React from "react";
import image from "../assets/portfolio.jpeg"

export default function ProfilePhoto() {
  return (
    <div className="box-1">
      <img src={image} className="profile-photo"></img>
    </div>
  );
}

