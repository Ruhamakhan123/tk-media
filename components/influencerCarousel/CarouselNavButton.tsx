import React from "react";
import arrowRight from "@/public/icons8-right-arrow-50.png";
import left from "@/public/icons8-left-arrow-50.png";

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
      className={`absolute top-1/2 z-10 flex justify-center items-center rounded-full 
        ${direction === "left" ? "left-4" : "right-4"} 
        bg-neutral-800 w-12 h-12 
        max-md:w-8 max-md:h-8`}
      aria-label={`Navigate ${direction}`}
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
