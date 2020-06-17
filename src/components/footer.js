import React from "react";
import { Paper } from "@material-ui/core";
import MediaLinks from "./media-links"

export default function Footer() {
  return (
    <Paper className="footer" id="footer">
      <MediaLinks></MediaLinks>
    </Paper>
  );
}

