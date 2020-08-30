import React, { useState } from "react";
import classes from "./File.module.css";
import { useDispatch } from "react-redux";
import * as filesActions from "../../../../store/actions/files";
import Swal from "sweetalert2";

const File = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const file = props.file;
  const isDirectory = props.file.isDirectory;
  const children = props.file.children || [];

  const fetchFile = async () => {
    try {
      await dispatch(filesActions.fetchFile(props.file.id));
    } catch (err) {
      Swal.fire("Oops...", "Something went wrong!", "error");
    }
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
