"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView
import ImageGallery from "./ImageGallery";
import "./../../app/styles.css";
import Link from "next/link";

// Variants for animation
const textBounceVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.2 },
  },
};

const imageZoomVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const ResultsSection: React.FC = () => {
  const sectionRef = useRef(null); // Create a ref for the section
  const isInView = useInView(sectionRef, { once: true }); // Check if the section is in view

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault(); // Prevent the default anchor click behavior
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${id}" not found`);
    }
  };

  return (
    <section id="about-us" className="bg-white py-16" ref={sectionRef}>
      <div className="flex flex-col justify-center mt-32 w-full px-10 max-md:px-4 max-md:mt-10 max-md:max-w-full">
        {/* Flex container for heading and paragraph */}
        <motion.div
          className="flex flex-wrap gap-10 justify-between w-full text-black max-md:flex-col max-md:gap-5 max-md:max-w-full"
          variants={textBounceVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Trigger animation based on scroll
        >
          <h3 className="font-gilroy self-start text-4xl font-bold leading-10 w-[558px] max-md:w-full max-md:text-3xl max-md:leading-9">
            We deliver top-notch results to our clients & partners
          </h3>

          <p className="text-base leading-7 w-[510px] max-md:w-full max-md:text-sm">
            Welcome to TK Media Group, your premier partner in the digital
            world. At TK Media Group, we believe in the power of creativity and
            strategy to elevate your brand's presence and engagement across
            various digital platforms.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          className="mt-8 max-md:mt-5"
          variants={imageZoomVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Trigger animation based on scroll
        >
          <ImageGallery />
        </motion.div>

        {/* Button with hover effect */}
        <motion.div
          className="self-center mt-12 max-md:mt-10"
          variants={buttonVariants}
          whileHover="hover"
        >
          <Link
            href="testimonial"
            onClick={(e) => handleScroll(e, "testimonial")}
            className="gap-2.5 px-5 py-2.5 text-base font-bold text-white bg-cyan-500 rounded-full"
          >
            More Reviews
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
