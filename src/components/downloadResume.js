

import React from "react";
import PDF from "../assets/resume"
import { IoMdCloudDownload } from 'react-icons/io';

export default function DownloadResume() {

  return (
    <div className="box-3">
      <a href={PDF} target="_blank" className="resume-download">
        <div className='download-button'>
          <IoMdCloudDownload style={{ margin: '0 0.5em' }} size={window.innerWidth <= 760 ? '1em' : '2em'} />
          <span>RESUME</span>
        </div>
      </a>
    </div>
  );
}

