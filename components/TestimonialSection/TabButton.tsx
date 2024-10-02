import React from "react";

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string; // Add this line to support className prop
}

const TabButton: React.FC<TabButtonProps> = ({
  active,
  onClick,
  children,
  className,
}) => (
  <button
    onClick={onClick}
    className={`text-base font-semibold ${className} ${
      active ? "text-cyan-500" : "text-black"
    }`}
  >
    {children}
  </button>
);

export default TabButton;
