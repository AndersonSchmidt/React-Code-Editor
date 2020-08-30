import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MonacoEditor from "react-monaco-editor";
import * as filesActions from "../../store/actions/files";

const Editor = (props) => {
  const dispatch = useDispatch();
  const file = useSelector((state) => state.files.file);
  const language = file.name.split(".").slice(-1)[0];

  const onChangeHandler = (newValue) => {
    dispatch(filesActions.setFileContent(newValue));
  };

  return (
    <MonacoEditor
      width="100%"
      height="100vh"
      language={language}
      theme="vs-dark"
      value={file.content}
      options={{
        selectOnLineNumbers: true,
        fontFamily: "Fira Code",
        fontLigatures: true,
      }}
      onChange={onChangeHandler}
    />
  );
};

export default Editor;
