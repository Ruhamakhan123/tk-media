import React from "react";

interface NavigationColumnProps {
  title: string;
  items: string[];
}

const NavigationColumn: React.FC<NavigationColumnProps> = ({
  title,
  items,
}) => {
  return (
    <nav className="flex flex-col justify-center">
      <h2 className="font-bold">{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mt-3">
            <a href="#" className="hover:underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationColumn;
