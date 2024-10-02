import React from "react";
import { StaticImageData } from "next/image";

interface CarouselImagesProps {
  images: StaticImageData[];
  currentIndex: number;
  imagesPerPage: number;
}

const CarouselImages: React.FC<CarouselImagesProps> = ({
  images,
  currentIndex,
  imagesPerPage,
}) => {
  const displayedImages = images.slice(
    currentIndex,
    currentIndex + imagesPerPage
  );

  return (
    <div className="flex justify-between w-full gap-4 overflow-hidden">
      {displayedImages.map((src, index) => (
        <div
          key={index}
          className="flex-1 min-w-0"
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          style={{
            transition: "transform 0.4s ease, opacity 0.4s ease", // Smooth transition for transform and opacity
          }}
        >
          <img
            loading="lazy"
            src={src.src}
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105"
            alt={`Influencer ${currentIndex + index + 1}`}
            style={{
              transition: "transform 0.4s ease, opacity 0.4s ease", // Smooth transition for hover effect and appearance
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CarouselImages;
