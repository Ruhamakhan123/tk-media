import React from "react";
import Image from "next/image";
import a from "@/public/Company logo.png";
import b from "@/public/Vector.png";
import c from "@/public/Vector (1).png";
import d from "@/public/Company logo (1).png";
import e from "@/public/Company logo (2).png";
import f from "@/public/Company logo (4).png";

const CompanyLogos = () => {
  return (
    <div id="logos" className="bg-white py-10 mt-16">
      <div className="text-center mb-8">
        <h3 className="font-gilroy text-xl font-semibold">
          These brands <span style={{ color: "#00bbd2" }}>trust</span> TK Media
          Group
        </h3>
      </div>

      {/* Logos container for large screens */}
      <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center items-center px-6 md:px-20">
        <div className="flex justify-center items-center h-24">
          <Image
            src={a}
            alt="Culture Amp"
            width={150}
            height={60}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex justify-center items-center h-24">
          <Image
            src={b}
            alt="Basecamp"
            width={150}
            height={60}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex justify-center items-center h-24">
          <Image
            src={c}
            alt="Medium"
            width={150}
            height={60}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex justify-center items-center h-24">
          <Image
            src={d}
            alt="Upwork"
            width={150}
            height={60}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex justify-center items-center h-24">
          <Image
            src={e}
            alt="Himalayas"
            width={150}
            height={60}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex justify-center items-center h-24">
          <Image
            src={f}
            alt="Basecamp"
            width={150}
            height={60}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>

      {/* Slider container for small screens */}
      <div className="lg:hidden flex overflow-x-scroll gap-6 px-6">
        <div className="flex-shrink-0 flex justify-center items-center h-24">
          <Image
            src={a}
            alt="Culture Amp"
            width={100}
            height={40}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex-shrink-0 flex justify-center items-center h-24">
          <Image
            src={b}
            alt="Basecamp"
            width={100}
            height={40}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex-shrink-0 flex justify-center items-center h-24">
          <Image
            src={c}
            alt="Medium"
            width={100}
            height={40}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex-shrink-0 flex justify-center items-center h-24">
          <Image
            src={d}
            alt="Upwork"
            width={100}
            height={40}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex-shrink-0 flex justify-center items-center h-24">
          <Image
            src={e}
            alt="Himalayas"
            width={100}
            height={40}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex-shrink-0 flex justify-center items-center h-24">
          <Image
            src={f}
            alt="Basecamp"
            width={100}
            height={40}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
