import React from "react";
import ProjectCard from "./ProjectCard";
import third from "@/public/9.jpg";
import second from "@/public/8.jpg";
import first from "@/public/10.jpg";

import { StaticImageData } from "next/image";

interface Project {
  imageSrc: string | StaticImageData;
  title: string;
}

const projects: Project[] = [
  {
    imageSrc: first,
    title: "Fintech Development Project",
  },
  {
    imageSrc: second,
    title: "Crypto Token Website",
  },
  {
    imageSrc: third,
    title: "Crypto Wallet Application",
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center p-32 bg-stone-50 max-md:px-5 max-md:py-24">
      <div className="flex flex-col w-full text-black max-md:max-w-full max-md:items-center max-md:text-center md:-ml-20">
        <header className="flex flex-wrap gap-10 justify-between items-center w-full max-md:flex-col max-md:text-center max-md:gap-4">
          <h2 className=" font-gilroy self-stretch my-auto text-4xl font-bold leading-10 w-[435px] max-md:w-full">
            Check out our Outstanding portfolio
          </h2>
          <p className="self-stretch my-auto text-base leading-7 w-[387px] max-md:w-full">
            Welcome to TK Media Group, your premier partner in the digital
            world. At TK Media Group, we believe in the power of creativity.
          </p>
        </header>
        <div className="flex flex-col md:flex-row md:gap-16 gap-4 items-center mt-8 w-full text-2xl font-bold leading-none max-md:w-full max-md:items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full md:w-1/3 max-md:w-full ${
                index === 2 ? "md:-ml-5" : ""
              }`}
            >
              <ProjectCard imageSrc={project.imageSrc} title={project.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-12 w-full text-base font-bold text-white max-md:mt-10 max-md:w-full">
        <button className="gap-2.5 px-5 py-2.5 bg-cyan-500 rounded-[1000px]">
          All Projects
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;
