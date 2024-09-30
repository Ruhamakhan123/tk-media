import React from "react";

const Newsletter: React.FC = () => {
  return (
    <div className="flex flex-col justify-center self-stretch my-auto text-base text-white min-w-[240px] w-[310px]">
      <h2 className="font-bold">Newsletter</h2>
      <form className="flex gap-10 justify-between items-center pb-5 mt-6 w-full border-b border-white">
        <label htmlFor="emailInput" className="sr-only">
          Enter your email
        </label>
        <input
          id="emailInput"
          type="email"
          placeholder="Enter your email"
          className="bg-transparent text-white placeholder-white w-full"
          aria-label="Enter your email"
        />
        <button type="submit" aria-label="Subscribe to newsletter">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d395f2c0968c80f0b3129dc9f0e308419de8f8a25956611097879f7538cd22cb?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.42] w-[17px]"
          />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
