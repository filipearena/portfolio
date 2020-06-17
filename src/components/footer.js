import React from "react";
import { Paper } from "@material-ui/core";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <Paper className="footer" id="footer">
      <FaLinkedin className="icon" size={'2em'} />
      <FaFacebook className="icon" size={'2em'} />
      <FaGithub className="icon" size={'2em'} />
      <FaEnvelope className="icon" size={'2em'} />
    </Paper>
  );
}

