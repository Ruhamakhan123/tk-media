import React from "react";

const SocialIcons: React.FC = () => {
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/246292c95650550a55681b281db1a00799048617c148491cff4433c5f16d0d1c?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
      alt: "Facebook",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc3f5a27ea0e2f9403d7b9fc7aca3215a8244fedb2ff83ecc4c0655dd2a62b13?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
      alt: "Twitter",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7996c9b6fafbe807b35cf5be6969c1e3d3f268de5d64b18f15d259d884fff2d8?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
      alt: "Instagram",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/20251e21854afeb16ee4de490b34a2c2b8d22ca52bdb6904db3a8e21514013a3?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
      alt: "LinkedIn",
    },
  ];

  return (
    <div className="flex gap-4 justify-center items-center self-stretch my-auto">
      {socialIcons.map((icon, index) => (
        <a
          key={index}
          href="#"
          className="flex flex-col justify-center items-center self-stretch my-auto w-6 min-h-[24px]"
        >
          <img
            loading="lazy"
            src={icon.src}
            alt={icon.alt}
            className="object-contain w-4 aspect-square"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
