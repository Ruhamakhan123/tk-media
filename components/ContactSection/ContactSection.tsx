import React from "react";
import ContactForm from "./ContactForm";
import ConsultationCard from "./ConsultationCard";
import backgroundSvg from "@/public/bg.svg"; // Adjust the path if needed

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center p-16 mt-56 w-full bg-cyan-500 max-md:px-5 max-md:py-24 max-md:mt-2 "
      style={{
        backgroundImage: `url(${backgroundSvg.src})`, // Ensure to use .src for StaticImageData
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="font-gilroy text-6xl font-bold leading-none text-center text-white max-md:max-w-full max-md:text-4xl">
        Let's get in touch!
      </h2>
      <div className="flex flex-wrap gap-8 justify-center items-start mt-8 max-md:mt-6 max-md:max-w-full">
        <ContactForm />
        <ConsultationCard />
      </div>
    </section>
  );
};

export default ContactSection;
