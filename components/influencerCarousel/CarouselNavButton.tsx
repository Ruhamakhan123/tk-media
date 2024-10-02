import React from "react";
import arrowRight from "@/public/Vector 4.png";
import left from "@/public/Vector 4 (1).png";

interface CarouselNavButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const CarouselNavButton: React.FC<CarouselNavButtonProps> = ({
  direction,
  onClick,
}) => {
  const arrowIcon = direction === "left" ? left : arrowRight;

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        direction === "left" ? "left-4" : "right-4"
      } bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors`}
      aria-label={`${direction === "left" ? "Previous" : "Next"} Image`}
    >
      <img
        src={arrowIcon.src}
        className="w-6 h-6 max-md:w-4 max-md:h-4"
        alt={`${direction} arrow`}
      />
    </button>
  );
};

export default CarouselNavButton;
