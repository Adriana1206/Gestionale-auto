import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Ordini</li>
        <li>Clienti</li>
        <li>Impostazioni</li>
      </ul>
    </div>
  );
};

export default Sidebar;
