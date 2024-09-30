import React from "react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title }) => {
  return (
    <article className="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-full md:w-[471px] max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-full aspect-[1.49] max-md:max-w-full"
      />
      <h3 className="mt-4 max-md:max-w-full">{title}</h3>
    </article>
  );
};

export default ProjectCard;
