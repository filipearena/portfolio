

import React from "react";
import { FaFileDownload } from 'react-icons/fa';

export default function DownloadResume() {
  return (
    <div className="box-3">
      <div><b>Click the link below to download my full resume</b></div>
      <FaFileDownload className="icon-resume" size={'2em'} />
    </div >
  );
}

