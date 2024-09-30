import React from "react";
import ServiceItem from "./ServiceItem";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64b936aa6174ad1f0a60fe57c90287e1a05915e277106e78bfe6f00912258d9b?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "Videography",
    description:
      "Welcome to TK Media Group, your premier partner in the digital world. At TK Media Group, we believe in the power of creativity and strategy to",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fb739f9f2402d2b9988d5686a2b58655dc74edd29cb5d06c348adccca5d820e?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "Photography",
    description:
      "Welcome to TK Media Group, your premier partner in the digital world. At TK Media Group, we believe in the power of creativity and strategy to",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a87fd12bb561aed341d82b8c3e310e724d01e8359f7085228db25b2707cdaae?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "Web Development",
    description:
      "Welcome to TK Media Group, your premier partner in the digital world. At TK Media Group, we believe in the power of creativity and strategy to",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbb64ec49bcadb087524c02d739fef38b81f95f3a2cd286049ab70631c948590?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "Blockchain Development",
    description:
      "Welcome to TK Media Group, your premier partner in the digital world. At TK Media Group, we believe in the power of creativity and strategy to",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/99c48287efe7ed1d312b81d697e9fa8201ea92e6a2a6786e80a3a6d89dabbb87?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "AI Development",
    description:
      "Welcome to TK Media Group, your premier partner in the digital world. At TK Media Group, we believe in the power of creativity and strategy to",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/606b78d5a9a16c1357371de76743cda30cf1030e138774f14ffc864e53635169?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "Digital Marketing",
    description:
      "Welcome to TK Media Group, your premier partner in the digital world. At TK Media Group, we believe in the power of creativity and strategy to",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center p-32 max-md:px-5 max-md:py-24">
      <h2 className=" font-gilroy text-4xl font-bold leading-tight text-center text-black max-md:max-w-full">
        We offer top notch services
      </h2>
      <div className="flex flex-col justify-center self-center mt-8 max-w-full w-[1096px]">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
