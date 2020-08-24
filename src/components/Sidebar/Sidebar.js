import React, { useEffect } from "react";
import classes from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import * as filetreeActions from "../../store/actions/filetree";
import File from "./File/File";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const filetree = useSelector((state) => state.filetree.filetree);

  useEffect(() => {
    const fetchFiletree = async () => {
      await dispatch(filetreeActions.fetchFiletree());
    };
    fetchFiletree();
  }, [dispatch]);

  return (
    <div>
      {filetree.map((file, index) => {
        return <File file={file} key={index} />;
      })}
    </div>
  );
};

export default Sidebar;
