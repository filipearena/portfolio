

import React from "react";
import PDF from "../assets/resume.pdf"
import { FaDownload } from 'react-icons/fa';

export default function DownloadResume() {

  return (
    <div className="box-3">
      <a href={PDF} target="_blank" className="resume-download">
        <FaDownload style={{ margin: '0 0.5em' }} size={window.innerWidth <= 760 ? '1em' : '2em'} />
        <span>RESUME</span>
      </a>
    </div>
  );
}

