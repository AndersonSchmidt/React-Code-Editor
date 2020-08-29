import React from "react";
import ActionButtons from "./ActionButtons/ActionButtons";
import Filetree from "./Filetree/Filetree";

const Sidebar = (props) => {
  return (
    <div>
      <ActionButtons />
      <Filetree />
    </div>
  );
};

export default Sidebar;
