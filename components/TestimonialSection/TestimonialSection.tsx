"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView for scroll-based animations
import TestimonialCard from "./TestimonialCard";
import TabButton from "./TabButton";

interface TestimonialData {
  avatarSrc: string;
  logoSrc: string;
  name: string;
  company: string;
  review: string;
}

const writtenTestimonials: TestimonialData[] = [
  {
    avatarSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1bd34d7a94a391ad15fd79751b950540fc9b6deb907197648855cd25c0c16dd2?apiKey=93385a543be74ee9937d50a97d245785&",
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/44846828d747c9ea0f49626a3fe81ddaa2cbd181fe656de83787f11f8d4b8169?apiKey=93385a543be74ee9937d50a97d245785&",
    name: "erick mhode",
    company: "Cint",
    review:
      "Great shipping and agents, alot more efficient than others, I got my stuff within a month. my package was small but it still was amazingly fast and efficient. I...",
  },
  {
    avatarSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2b5d6a5215880ca69883d11699e333ce7da0f9d82a62c439328d7f1747d05679?apiKey=93385a543be74ee9937d50a97d245785&",
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c4052163ed6decae0b3c7fb1640830916c95577f0dc5aaa88304b8082a4d6bc2?apiKey=93385a543be74ee9937d50a97d245785&",
    name: "erick mhode",
    company: "Cint",
    review:
      "Great shipping and agents, alot more efficient than others, I got my stuff within a month. my package was small but it still was amazingly fast and efficient. I...",
  },
  {
    avatarSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3dd0887957c3f99209d79100993c3c970e180318fa788c8b8c97c3e083554df8?apiKey=93385a543be74ee9937d50a97d245785&",
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f8e8a3deccd0b08e13d3e8ab185ac7d67ca0d2f251e54932ba7dc4409a855a8f?apiKey=93385a543be74ee9937d50a97d245785&",
    name: "erick mhode",
    company: "Cint",
    review:
      "Great shipping and agents, alot more efficient than others, I got my stuff within a month. my package was small but it still was amazingly fast and efficient. I...",
  },
];

const videoTestimonials = [
  {
    videoSrc: "https://www.youtube.com/embed/gMK95vfvoRE",
    name: "Jane Doe",
    company: "Company A",
  },
  {
    videoSrc: "https://www.youtube.com/embed/q7hOOBcibFM",
    name: "John Smith",
    company: "Company B",
  },
  {
    videoSrc: "https://www.youtube.com/embed/xDk8BWeADSU",
    name: "Andrew Smith",
    company: "Company C",
  },
];

const TestimonialSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"written" | "video">("written"); // Initialize activeTab state
  const sectionRef = useRef(null); // Create a ref for the section
  const isInView = useInView(sectionRef, { once: true }); // Trigger the animation only once when the section is in view
  const cardDelay = 0.2; // Delay between each card animation

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: index * cardDelay },
    }),
  };

  const tabButtonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="testimonial"
      className="flex overflow-hidden flex-col justify-center p-32 bg-white max-md:px-5 max-md:py-24"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Trigger the animation based on scroll
      variants={fadeInUp} // Apply fade-in-up animation to the section
    >
      <motion.div
        className="flex flex-col justify-center w-full max-md:max-w-full"
        variants={fadeInUp} // Fade-in-up for the heading and nav
      >
        <motion.header className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
          <h2 className="font-gilroy self-stretch my-auto text-4xl font-bold leading-tight text-center text-black">
            Clients love us!
          </h2>
          <nav className="flex gap-8 justify-center items-center self-stretch my-auto text-base font-semibold min-w-[240px]">
            <motion.div
              variants={tabButtonVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Trigger animation for buttons
            >
              <TabButton
                active={activeTab === "written"}
                onClick={() => setActiveTab("written")}
                className="mr-4" // Add margin-right to create space
              >
                Written Testimonials
              </TabButton>
              <TabButton
                active={activeTab === "video"}
                onClick={() => setActiveTab("video")}
                className="ml-4" // Add margin-left for symmetry if needed
              >
                Video Testimonials
              </TabButton>
            </motion.div>
          </nav>
        </motion.header>
      </motion.div>

      <motion.div className="flex flex-wrap gap-4 justify-center items-center mt-8 w-full max-md:max-w-full">
        {activeTab === "written"
          ? writtenTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index} // Pass the index to customize delay per card
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants} // Apply staggered animation for each card
              >
                <TestimonialCard key={index} {...testimonial} />
              </motion.div>
            ))
          : videoTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants} // Apply staggered animation for video cards
              >
                <div className="flex flex-col items-center">
                  <iframe
                    width="300" // Adjust as needed
                    height="200" // Adjust as needed
                    src={testimonial.videoSrc}
                    title={`${testimonial.name}'s video testimonial`}
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg"
                  />
                  <p className="mt-2 text-base text-black">
                    {testimonial.name} - {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
      </motion.div>
    </motion.section>
  );
};

export default TestimonialSection;
