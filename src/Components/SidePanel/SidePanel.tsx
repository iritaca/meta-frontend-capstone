import React from "react";
import Styles from "./SidePanel.module.scss";
import ReserveTable from "./ReserveATable";

interface SidePanelProps {
  variant: "reserve" | "menu";
  onClose: () => void;
  onSave?: () => void;
}

const SidePanel = ({ onClose, variant, onSave }: SidePanelProps) => {
  const titleToUse = variant === "menu" ? "Menu" : "Reserve a table";

  return (
    <>
      <div className={Styles.overlay} onClick={onClose} />
      <aside className={Styles.sidePanel}>
        <h2>{titleToUse}</h2>
        {variant === "reserve" && (
          <ReserveTable onCancel={onClose} onSave={onSave} />
        )}
      </aside>
    </>
  );
};

export default SidePanel;
