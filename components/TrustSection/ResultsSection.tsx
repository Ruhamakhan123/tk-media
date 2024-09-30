import React from "react";
import ImageGallery from "./ImageGallery";

const ResultsSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center mt-32 w-full px-10 max-md:px-4 max-md:mt-10 max-md:max-w-full">
      {/* Flex container for heading and paragraph */}
      <div className="flex flex-wrap gap-10 justify-between w-full text-black max-md:max-w-full">
        <h3 className="self-start text-4xl font-bold leading-10 w-[558px] max-md:max-w-full">
          We deliver top notch results to our clients & partners
        </h3>
        <p className="text-base leading-7 w-[510px] max-md:max-w-full">
          Welcome to TK Media Group, your premier partner in the digital world.
          At TK Media Group, we believe in the power of creativity and strategy
          to elevate your brand's presence and engagement across various digital
          platforms.
        </p>
      </div>

      {/* Image Gallery */}
      <ImageGallery />

      {/* Button */}
      <button className="gap-2.5 self-center px-5 py-2.5 mt-12 text-base font-bold text-white bg-cyan-500 rounded-[1000px] max-md:mt-10">
        Read more
      </button>
    </div>
  );
};

export default ResultsSection;
