import React from "react";
import classes from "./ActionButtons.module.css";

const ActionButtons = (props) => {
  return (
    <div className={`row text-center ${classes.Container}`}>
      <div className="col">Save</div>
      <div className="col">Delete</div>
    </div>
  );
};

export default ActionButtons;
