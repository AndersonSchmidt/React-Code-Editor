import React from "react";
import classes from "./File.module.css";

const File = (props) => {
  return (
    <div className={classes.Container}>
      <p>{props.file.name}</p>
      {props.file.children
        ? props.file.children.map((file) => {
            return <File file={file} key={file.id} />;
          })
        : null}
    </div>
  );
};
export default File;
