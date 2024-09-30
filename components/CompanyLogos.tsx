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
    <div className="bg-white py-10">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold">
          These brands <span style={{ color: "#00bbd2" }}>trust</span> TK Media
          Group
        </h3>
      </div>

      {/* Logos container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center items-center px-6 md:px-20">
        <div className="flex justify-center">
          <Image
            src={a}
            alt="Culture Amp"
            width={150} // Increased width
            height={60} // Increased height
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={b}
            alt="Basecamp"
            width={150}
            height={60}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={c}
            alt="Medium"
            width={150}
            height={60}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={d}
            alt="Upwork"
            width={150}
            height={60}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={e}
            alt="Himalayas"
            width={150}
            height={60}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={f}
            alt="Basecamp"
            width={150}
            height={60}
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
