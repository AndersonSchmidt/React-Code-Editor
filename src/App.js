import React from "react";
import classes from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Editor from "./components/Editor/Editor";

function App() {
  return (
    <div className="row">
      <div className={`col-md-3 ${classes.SidebarCol}`}>
        <Sidebar />
      </div>
      <div className={`col-md-9 ${classes.EditorCol}`}>
        <Editor />
      </div>
    </div>
  );
}

export default App;
