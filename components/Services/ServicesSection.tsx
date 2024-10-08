"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView
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
      "We produce captivating videos for corporate and social media purposes. Our videography services cover the entire process, from conceptualization to post-production, delivering compelling content that tells your brand's story.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fb739f9f2402d2b9988d5686a2b58655dc74edd29cb5d06c348adccca5d820e?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "Photography",
    description:
      "Our expert photographers and artistic directors create stunning visuals that capture the essence of your brand. Whether it's a professional photoshoot or artistic direction, we bring your vision to life.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/99c48287efe7ed1d312b81d697e9fa8201ea92e6a2a6786e80a3a6d89dabbb87?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "AI Development",
    description:
      "Unlock the power of AI with our custom solutions, including machine learning, natural language processing, and computer vision. We tailor our approach to enhance efficiency and drive innovation for your business.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a87fd12bb561aed341d82b8c3e310e724d01e8359f7085228db25b2707cdaae?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "Web Development",
    description:
      "We produce captivating videos for corporate and social media purposes. Our videography services cover the entire process, from conceptualization to post-production, delivering compelling content that tells your brand's story.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbb64ec49bcadb087524c02d739fef38b81f95f3a2cd286049ab70631c948590?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "Blockchain Development",
    description:
      "Transform your operations with secure and scalable blockchain solutions. Our team builds decentralized applications, smart contracts, and custom networks to enhance transparency and efficiency across various industries.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbb64ec49bcadb087524c02d739fef38b81f95f3a2cd286049ab70631c948590?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "Application Development",
    description:
      "Elevate your business with tailored applications that deliver seamless user experiences. We create mobile and web solutions designed for scalability and security, helping you engage customers and streamline operations.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/606b78d5a9a16c1357371de76743cda30cf1030e138774f14ffc864e53635169?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785",
    title: "Digital Marketing",
    description:
      "Boost your online presence with our data-driven digital marketing strategies. From SEO and PPC to social media and content marketing, we help increase visibility, engage audiences, and drive conversions.",
  },
];

const ServicesSection: React.FC = () => {
  // Create a ref for the section to track when it comes into view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Define variants for animations
  const fadeDownVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const flipRightVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.8 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each service item animation
      },
    },
  };

  return (
    <motion.section
      id="services"
      ref={sectionRef}
      className="flex flex-col justify-center p-12 md:p-32 max-md:px-5 max-md:py-10"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Trigger animation on scroll
      variants={fadeDownVariants} // Apply fade-down animation to the section
    >
      <motion.h2
        className="font-gilroy text-4xl font-bold leading-tight text-center text-black max-md:max-w-full"
        variants={fadeDownVariants} // Apply fade-down animation to the heading
      >
        We offer top-notch services
      </motion.h2>

      <motion.div
        className="flex text-start flex-col justify-center self-center mt-8 max-w-full w-[1096px]"
        variants={staggerContainer} // Apply staggered animation to the container
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation on scroll
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={flipRightVariants} // Apply flip-right animation to each service
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <ServiceItem
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection;
