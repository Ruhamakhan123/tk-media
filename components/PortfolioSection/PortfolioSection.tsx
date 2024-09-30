import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  imageSrc: string;
  title: string;
}

const projects: Project[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1a050a0e3c27ed6cd6efc858854b2e32bfc6510fd49a3f6b9dd21ca88ac7403b?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "Fintech Development Project",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4bbcdbded388d30a7be34ec513911fc4c4966300c392c10ca2764e4a2377fe1d?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "Crypto Token Website",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/33be3c88cf1d616ad3d187f5dbfb03172da117437bbdc2a6e998a71f2eeaf2cc?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "Crypto Wallet Application",
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center p-32 bg-stone-50 max-md:px-5 max-md:py-24">
      <div className="flex flex-col w-full text-black max-md:max-w-full">
        <header className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
          <h2 className="self-stretch my-auto text-4xl font-bold leading-10 w-[435px] max-md:max-w-full">
            Check out our Outstanding portfolio
          </h2>
          <p className="self-stretch my-auto text-base leading-7 w-[387px]">
            Welcome to TK Media Group, your premier partner in the digital
            world. At TK Media Group, we believe in the power of creativity.
          </p>
        </header>
        <div className="flex flex-col md:flex-row md:gap-8 gap-4 items-center mt-8 w-full text-2xl font-bold leading-none max-md:max-w-full">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-12 w-full text-base font-bold text-white max-md:mt-10 max-md:max-w-full">
        <button className="gap-2.5  px-5 py-2.5 bg-cyan-500 rounded-[1000px]">
          All Projects
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;
