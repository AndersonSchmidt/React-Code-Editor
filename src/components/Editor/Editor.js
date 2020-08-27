import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MonacoEditor from "react-monaco-editor";

const Editor = (props) => {
  const file = useSelector((state) => state.files.file);
  const [content, setContent] = useState("");

  const onChangeHandler = (newValue) => {
    setContent(newValue);
  };

  useEffect(() => {
    setContent(file.content);
  }, [file]);

  return (
    <MonacoEditor
      width="800"
      height="600"
      language="java"
      theme="vs-dark"
      value={content}
      options={{
        selectOnLineNumbers: true,
      }}
      onChange={onChangeHandler}
    />
  );
};

export default Editor;
