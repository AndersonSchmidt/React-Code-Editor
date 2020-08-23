import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10">
        <h1>Text Editor</h1>
      </div>
    </div>
  );
}

export default App;
