import Link from "next/link";
import React from "react";

const CallToAction: React.FC = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault(); // Prevent the default anchor click behavior
    const targetElement = document.getElementById(id);

    if (targetElement) {
      console.log(`Scrolling to ${id}`); // Debugging line
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${id}" not found`); // Debugging line
    }
  };

  return (
    <div className="flex gap-3 justify-center items-center mt-5 font-bold">
      <button className="flex gap-2.5 justify-center items-center self-stretch py-2 pr-4 pl-4 my-auto text-white bg-black rounded-[1000px] text-sm md:text-base">
        <Link
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className="self-stretch my-auto"
        >
          Schedule a Call
        </Link>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ee5732c38e59a385cc043399ae8895f1e85cbd7b446e0bad9c92d84439fefd9?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[2.16] w-[26px]"
        />
      </button>
      <Link
        href="#testimonials"
        onClick={(e) => handleScroll(e, "testimonials")}
        className="gap-2.5 self-stretch px-4 py-2 my-auto text-black border border-black border-solid rounded-[1000px] text-sm md:text-base"
      >
        Reviews
      </Link>
    </div>
  );
};

export default CallToAction;
