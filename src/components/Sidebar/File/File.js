import React from "react";

const File = (props) => {
  return (
    <div style={{ marginLeft: "10px" }}>
      <p>{props.file.name}</p>
      {props.file.children
        ? props.file.children.map((file) => {
            return <File file={file} />;
          })
        : null}
    </div>
  );
};
export default File;
