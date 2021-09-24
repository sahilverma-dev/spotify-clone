import React from "react";

const SideBarOption = ({ title, Icon }) => {
  return (
    <div className="sidebar-option">
      <div className="icon-box">
        <Icon />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default SideBarOption;
