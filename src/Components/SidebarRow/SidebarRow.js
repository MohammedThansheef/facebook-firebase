import React from "react";
import "./SidebarRow.css";

function SidebarRow({ Icon, title }) {
  return (
    <div className="sidebarRow">
      {Icon}
      <h3>{title}</h3>
    </div>
  );
}

export default SidebarRow;
