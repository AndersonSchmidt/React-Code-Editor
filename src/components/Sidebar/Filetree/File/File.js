import React, { useState } from "react";
import classes from "./File.module.css";
import { useDispatch } from "react-redux";
import * as filesActions from "../../../../store/actions/files";

const File = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const file = props.file;
  const isDirectory = props.file.isDirectory;
  const children = props.file.children || [];

  const fetchFile = async () => {
    await dispatch(filesActions.fetchFile(props.file.id));
  };

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className={classes.Container}>
      <p onClick={isDirectory ? toggleShow : fetchFile}>{file.name}</p>
      {show ? (
        <div>
          {children.map((file) => {
            return <File file={file} key={file.id} />;
          })}
        </div>
      ) : null}
    </div>
  );
};
export default File;
