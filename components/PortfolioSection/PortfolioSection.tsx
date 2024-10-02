"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for basic animations
import ProjectCard from "./ProjectCard";
import third from "@/public/9.jpg";
import second from "@/public/8.jpg";
import first from "@/public/10.jpg";
import { StaticImageData } from "next/image";

interface Project {
  imageSrc: string | StaticImageData;
  title: string;
}

// Initial set of projects
const initialProjects: Project[] = [
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

// Additional projects to show when button is clicked
const additionalProjects: Project[] = [
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

// Utility function to group projects into rows
const groupProjects = (projects: Project[], groupSize: number) => {
  const rows: Project[][] = [];
  for (let i = 0; i < projects.length; i += groupSize) {
    rows.push(projects.slice(i, i + groupSize));
  }
  return rows;
};

const PortfolioSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  // Group projects for initial and additional projects
  const displayedProjects = showMore ? additionalProjects : initialProjects;
  const projectRows = groupProjects(displayedProjects, 3);

  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const flipUpVariants = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      id="portfolio"
      className="flex flex-col justify-center items-center p-28 bg-stone-50 max-md:px-5 max-md:py-24"
      initial="hidden"
      animate="visible" // Always visible since we're not using scroll-trigger
      variants={fadeUpVariants} // Apply fade-up animation to the section
    >
      <div className="flex flex-col w-full text-black max-md:max-w-full max-md:items-center max-md:text-center md:-ml-20">
        <motion.header
          className="flex flex-wrap gap-10 justify-between items-center w-full max-md:flex-col max-md:text-center max-md:gap-4"
          variants={fadeUpVariants} // Apply fade-up animation to the header
        >
          <h2 className="font-gilroy self-stretch my-auto text-4xl font-bold leading-10 w-[435px] max-md:w-full">
            Check out our Outstanding portfolio
          </h2>
          <p className="self-stretch my-auto text-base leading-7 w-[387px] max-md:w-full">
            Welcome to TK Media Group, your premier partner in the digital
            world.
          </p>
        </motion.header>

        {/* Render each row of projects */}
        {projectRows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex flex-col md:flex-row md:gap-16 gap-4 items-center mt-8 w-full text-2xl font-bold leading-none max-md:w-full max-md:items-center"
            variants={fadeUpVariants} // Apply fade-up animation to each project row
          >
            {row.map((project, index) => (
              <motion.div
                key={index + rowIndex * 3} // Unique key for each project
                className={`flex-shrink-0 w-full md:w-1/3 max-md:w-full ${
                  index === 2 && row.length === 3 ? "md:-ml-5" : ""
                }`}
                variants={flipUpVariants} // Apply flip-up animation to each project
              >
                <ProjectCard
                  imageSrc={project.imageSrc}
                  title={project.title}
                />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center mt-12 w-full text-base font-bold text-white max-md:mt-10 max-md:w-full">
        <button
          onClick={() => setShowMore(!showMore)}
          className="gap-2.5 px-5 py-2.5 bg-cyan-500 rounded-[1000px]"
        >
          {showMore ? "Show Less" : "All Projects"}
        </button>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
