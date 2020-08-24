import React from "react";
import { useSelector } from "react-redux";

const Editor = (props) => {
  const file = useSelector((state) => state.files.file);
  return <p>{file.content}</p>;
};

export default Editor;
