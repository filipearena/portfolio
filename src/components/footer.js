import React from "react";
import { Paper } from "@material-ui/core";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const linkedinLink = "https://www.linkedin.com/in/filipe-arena-23b33991/";
const facebookLink = "https://www.facebook.com/filipe.arena";
const githubLink = "https://github.com/filipearena";

const goTo = (link) => {
  window.open(link);
}

const mailTo = () => {
  window.location.href = "mailto:filipe.arena@gmail.com";
}

export default function Footer() {
  return (
    <Paper className="footer" id="footer">
      <FaLinkedin className="icon" size={'2em'} onClick={() => goTo(linkedinLink)} />
      <FaFacebook className="icon" size={'2em'} onClick={() => goTo(facebookLink)} />
      <FaGithub className="icon" size={'2em'} onClick={() => goTo(githubLink)} />
      <FaEnvelope className="icon" size={'2em'} onClick={() => mailTo()} />
    </Paper>
  );
}

