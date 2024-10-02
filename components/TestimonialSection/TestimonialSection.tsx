/**
 * This code was generated by Builder.io.
 */
import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import TabButton from "./TabButton";
import Aos from "aos";

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
  const [activeTab, setActiveTab] = useState<"written" | "video">("written");

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="testimonials"
      className="flex overflow-hidden flex-col justify-center p-32 bg-white max-md:px-5 max-md:py-24 mt-24"
    >
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <header className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
          <h2 className="font-gilroy self-stretch my-auto text-4xl font-bold leading-tight text-center text-black">
            Clients love us!
          </h2>
          <nav className="flex gap-8 justify-center items-center self-stretch my-auto text-base font-semibold min-w-[240px]">
            <TabButton
              active={activeTab === "written"}
              onClick={() => setActiveTab("written")}
            >
              Written Testimonials
            </TabButton>
            <TabButton
              active={activeTab === "video"}
              onClick={() => setActiveTab("video")}
            >
              Video Testimonials
            </TabButton>
          </nav>
        </header>

        <div className="flex flex-wrap gap-4 justify-center items-center mt-8 w-full max-md:max-w-full">
          {activeTab === "written"
            ? writtenTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))
            : videoTestimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-col items-center">
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
              ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-1.5 justify-center items-center self-stretch my-auto">
          <div className="flex self-stretch my-auto w-8 bg-black min-h-[6px] rounded-[1000px]" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
