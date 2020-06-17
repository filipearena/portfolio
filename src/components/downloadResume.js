

import React from "react";
import PDF from "../assets/resume.pdf"
import { FaDownload } from 'react-icons/fa';

export default function DownloadResume() {

  return (
    <div className="box-3">
      <a href={PDF} target="_blank" className="resume-download">
        <FaDownload className="icon" size={'2em'} />
        <div>RESUME</div>
      </a>
    </div>
  );
}

