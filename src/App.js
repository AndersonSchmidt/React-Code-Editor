import React from "react";
import classes from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="row">
      <div className={`col-md-3 ${classes.SidebarCol}`}>
        <Sidebar />
      </div>
      <div className="col-md-9">
        <h1>Text Editor</h1>
      </div>
    </div>
  );
}

export default App;
