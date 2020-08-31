import React from "react";
import classes from "./ActionButtons.module.css";
import { IoIosSave } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import * as filesActions from "../../../store/actions/files";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const ActionButtons = () => {
  const dispatch = useDispatch();

  const saveFile = async () => {
    try {
      await dispatch(filesActions.saveFile());
      Swal.fire("Saved!", "The file was successfully saved.", "success");
    } catch (err) {
      Swal.fire("Oops...", "Something went wrong!", "error");
    }
  };

  const deleteFile = async () => {
    try {
      await dispatch(filesActions.deleteFile());
      Swal.fire("Deleted!", "The file was successfully deleted.", "success");
    } catch (err) {
      Swal.fire("Oops...", "Something went wrong!", "error");
    }
  };

  return (
    <div className={`row text-center ${classes.Container}`}>
      <div className="col">
        <button type="button" className="btn btn-dark" onClick={saveFile}>
          <IoIosSave size={24} color="#2A8FBD" className={classes.Icon} /> Save
        </button>
      </div>
      <div className="col">
        <button type="button" className="btn btn-dark" onClick={deleteFile}>
          <FaTrash size={18} color="#FF4040" className={classes.Icon} /> Delete
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
