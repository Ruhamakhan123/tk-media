import React from "react";

interface TabButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void; // Add onClick prop
}

const TabButton: React.FC<TabButtonProps> = ({
  children,
  active = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick} // Attach onClick handler
      className={`gap-2.5 self-stretch pb-3 my-auto ${
        active ? "text-cyan-500 border-b-2 border-cyan-500" : "text-black"
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
