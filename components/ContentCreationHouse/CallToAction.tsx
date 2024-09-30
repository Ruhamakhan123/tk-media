import React from "react";

const CallToAction: React.FC = () => {
  return (
    <div className="flex gap-3 justify-center items-center mt-5 font-bold">
      <button className="flex gap-2.5 justify-center items-center self-stretch py-2.5 pr-5 pl-5 my-auto text-white bg-black rounded-[1000px]">
        <span className="self-stretch my-auto">Schedule a Call</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ee5732c38e59a385cc043399ae8895f1e85cbd7b446e0bad9c92d84439fefd9?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[2.16] w-[26px]"
        />
      </button>
      <button className="gap-2.5 self-stretch px-5 py-2.5 my-auto text-black border border-black border-solid rounded-[1000px]">
        Check Reviews
      </button>
    </div>
  );
};

export default CallToAction;
