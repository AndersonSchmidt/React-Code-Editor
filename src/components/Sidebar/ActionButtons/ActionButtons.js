import React from "react";
import classes from "./ActionButtons.module.css";
import { IoIosSave } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

const ActionButtons = (props) => {
  return (
    <div className={`row text-center ${classes.Container}`}>
      <div className={`col ${classes.Button}`}>
        <button type="button" class="btn btn-dark">
          <IoIosSave size={24} color="#2A8FBD" className={classes.Icon} /> Save
        </button>
      </div>
      <div className={`col ${classes.Button}`}>
        <p>
          <button type="button" class="btn btn-dark">
            <FaTrash size={18} color="#FF4040" className={classes.Icon} />{" "}
            Delete
          </button>
        </p>
      </div>
    </div>
  );
};

export default ActionButtons;
