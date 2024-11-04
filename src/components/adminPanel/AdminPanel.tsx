import React from "react";
import panelStyle from "./panel.module.css";

interface adminPanelProps {
  onAddClick: () => void;
}

const AdminPanel: React.FC<adminPanelProps> = ({ onAddClick }) => {
  return (
    <div className={panelStyle.panelContainer}>
      <h2>Admin Panel</h2>
      <button onClick={onAddClick}>Add card</button>
    </div>
  );
};

export default AdminPanel;
