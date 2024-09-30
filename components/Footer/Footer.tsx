import React from "react";
import SocialIcons from "./SocialIcons";
import NavigationColumn from "./NavigationColumn";
import Newsletter from "./Newsletter";

interface FooterProps {
  logoSrc: string;
  description: string;
}

const Footer: React.FC<FooterProps> = ({ logoSrc, description }) => {
  const navigationItems = [
    {
      title: "Navigate",
      items: ["About Us", "Our Approach", "Resources", "Search"],
    },
    {
      title: "Navigate",
      items: ["About Us", "Our Approach", "Resources", "Search"],
    },
    {
      title: "Navigate",
      items: ["About Us", "Our Approach", "Resources", "Search"],
    },
    {
      title: "Services",
      items: [
        "Web Development",
        "Videography",
        "Photography",
        "Increase clicks",
      ],
    },
  ];

  return (
    <footer className="flex flex-col justify-center items-center px-28 pt-14 pb-6 bg-black max-md:px-5 max-md:pt-12">
      <div className="flex flex-col w-full max-w-[1216px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-start w-full text-base text-white max-md:max-w-full">
          <div className="flex flex-col leading-6 min-w-[240px] w-[259px]">
            <img
              loading="lazy"
              src={logoSrc}
              alt="Company Logo"
              className="object-contain max-w-full aspect-[3] w-[168px]"
            />
            <p className="mt-4">{description}</p>
          </div>
          {navigationItems.map((column, index) => (
            <NavigationColumn
              key={index}
              title={column.title}
              items={column.items}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-center mt-12 w-full max-md:mt-6 max-md:max-w-full">
          <SocialIcons />
          <Newsletter />
        </div>
        <p className="mt-12 text-base text-center text-white max-md:mt-6 max-md:max-w-full">
          © 2025 TKMedia.com - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
