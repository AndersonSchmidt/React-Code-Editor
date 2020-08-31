import React from "react";
import ActionButtons from "./ActionButtons/ActionButtons";
import Filetree from "./Filetree/Filetree";

const Sidebar = () => {
  return (
    <div style={{overflow: 'scroll', height: '100vh'}}>
      <ActionButtons />
      <Filetree />
    </div>
  );
};

export default Sidebar;
