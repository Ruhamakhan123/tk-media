import React from "react";
import TrustedBadge from "./TrustedBadge";
import CallToAction from "./CallToAction";

interface ContentCreationHouseProps {
  influencerCount: number;
  title: string;
  description: string;
}

const ContentCreationHouse: React.FC<ContentCreationHouseProps> = ({
  influencerCount,
  title,
  description,
}) => {
  return (
    <main className="flex flex-wrap justify-center text-base">
      <section className="flex flex-col flex-1 shrink justify-center py-32 pr-16 pl-32 basis-0 min-w-[240px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col items-start pr-14 w-full rounded-none max-w-[536px] max-md:pr-5 max-md:max-w-full">
          <TrustedBadge influencerCount={influencerCount} />
          <h1 className="mt-5 text-5xl font-medium text-black leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
            {title}
          </h1>
          <p className="mt-5 leading-6 text-black">{description}</p>
          <CallToAction />
        </div>
      </section>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd5efa7059554f7adb00f2c12bda5822395a4148a31bbd3ed4623ee2abda839b?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785"
        alt="Content Creation House visual representation"
        className="object-contain aspect-[1.04] min-w-[240px] w-[720px] max-md:max-w-full"
      />
    </main>
  );
};

export default ContentCreationHouse;
