import React from "react";
import classes from "./File.module.css";
import { useDispatch } from "react-redux";
import * as filesActions from "../../../store/actions/files";

const File = (props) => {
  const dispatch = useDispatch();

  const fetchFile = async () => {
    await dispatch(filesActions.fetchFile(props.file.id));
  };

  return (
    <div className={classes.Container}>
      <p onClick={fetchFile}>{props.file.name}</p>
      {props.file.children
        ? props.file.children.map((file) => {
            return <File file={file} key={file.id} />;
          })
        : null}
    </div>
  );
};
export default File;
