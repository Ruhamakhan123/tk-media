import React from "react";

const CarouselHeader: React.FC = () => {
  return (
    <div className="flex flex-col justify-center max-w-full text-center text-white w-full">
      <h2 className="font-gilroy text-4xl font-bold leading-tight max-md:max-w-full">
        TK Media is Loved by <span className="text-cyan-500">influencers</span>!
      </h2>
      <p className="mt-3 text-base leading-7 max-md:max-w-full">
        Welcome to TK Media Group, your premier partner in the digital world. At
        TK Media Group, we believe in the power of creativity.
      </p>
    </div>
  );
};

export default CarouselHeader;
