import React, { useState } from "react";
import CarouselHeader from "./CarouselHeader";
import CarouselImages from "./CarouselImages";
import CarouselNavButton from "./CarouselNavButton";
import img1 from "@/public/image 36.jpg";
import img2 from "@/public/image 37.jpg";
import img3 from "@/public/image 30.jpg";
import img4 from "@/public/image 38.jpeg";
import img5 from "@/public/image 39.jpeg";

const images = [img1, img2, img3, img4, img5];

const InfluencerCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, images.length - imagesPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex overflow-hidden flex-col justify-center items-center p-32 bg-black max-md:px-5 max-md:py-24">
        <CarouselHeader />
        <div className="relative flex w-full mt-12 max-md:mt-10">
          <CarouselImages
            images={images}
            currentIndex={currentIndex}
            imagesPerPage={imagesPerPage}
          />
          <CarouselNavButton direction="left" onClick={handlePrev} />
          <CarouselNavButton direction="right" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default InfluencerCarousel;
