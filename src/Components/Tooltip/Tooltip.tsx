import { useState } from "react";
import Styles from "./Tooltip.module.scss";
const Tooltip = ({
  label,
  children,
  showTooltip = true,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  showTooltip?: boolean;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const renderTooltip = showTooltip && isVisible;
  return (
    <div
      className={`${Styles.tooltipAnchor} ${
        renderTooltip ? Styles.show : Styles.hide
      } ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className={Styles.tooltip}>{label}</div>
      {children}
    </div>
  );
};

export default Tooltip;
