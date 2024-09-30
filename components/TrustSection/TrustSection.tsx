/**
 * This code was generated by Builder.io.
 */
import React from "react";
import BrandLogo from "./BrandLogo";
import ResultsSection from "./ResultsSection";

interface TrustSectionProps {
  brands: Array<{ src: string; alt: string }>;
}

const TrustSection: React.FC<TrustSectionProps> = ({ brands }) => {
  return (
    <section className="flex flex-col justify-center p-32 bg-white max-md:px-5 max-md:py-24">
      <h2 className="self-start text-2xl font-bold leading-none text-center text-black max-md:max-w-full">
        These brands <span className="text-cyan-500">trust</span> TK Media Group
      </h2>
      <div className="flex flex-wrap gap-10 justify-between items-center mt-10 w-full max-md:max-w-full">
        {brands.map((brand, index) => (
          <BrandLogo key={index} src={brand.src} alt={brand.alt} />
        ))}
      </div>
      <ResultsSection />
    </section>
  );
};

export default TrustSection;
