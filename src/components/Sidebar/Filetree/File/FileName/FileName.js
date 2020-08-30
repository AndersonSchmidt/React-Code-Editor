import React from "react";
import classes from "./FileName.module.css";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

const FileName = (props) => {
  const file = props.file;
  let icon;

  if (file.isDirectory) {
    if (props.show) {
      icon = (
        <FaFolderOpen
          size={20}
          color="#2A8FBD"
          className={classes.FolderIcon}
        />
      );
    } else {
      icon = (
        <FaFolder size={20} color="#2A8FBD" className={classes.FolderIcon} />
      );
    }
  } else {
    const baseUrl =
      "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/d1d3fd3ea96878eb523105941a322c3e00f9f080/icons/";
    const extension = file.name.split(".").slice(-1)[0];
    const iconUrl = baseUrl + extension + ".svg";
    icon = <img src={iconUrl} alt="" className={classes.ExtensionIcon} />;
  }

  return (
    <div className={classes.Container} onClick={props.clicked}>
      {icon}
      <p>{file.name}</p>
    </div>
  );
};

export default FileName;
