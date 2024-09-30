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
    <div className="flex justify-between w-full gap-4">
      {displayedImages.map((src, index) => (
        <div key={index} className="flex-1 min-w-0">
          <img
            loading="lazy"
            src={src.src} 
            className="object-cover w-full h-full"
            alt={`Influencer ${currentIndex + index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CarouselImages;
