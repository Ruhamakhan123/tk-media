import React from "react";

interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  icon,
  title,
  description,
}) => {
  // Split the title into words
  const titleWords = title.split(" ");

  return (
    <div className="flex flex-col md:flex-row gap-10 justify-between items-center py-8 w-full border-b border-stone-300 max-md:max-w-full">
      <div className="flex flex-col md:flex-row justify-center self-stretch my-auto text-3xl font-bold leading-none text-center text-black whitespace-nowrap min-w-[240px] w-[464px] max-md:max-w-full">
        <div className="flex text-start gap-6 items-center w-full max-md:max-w-full">
          <img
            loading="lazy"
            src={icon}
            alt={`${title} icon`}
            className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
          />
          <div className="self-stretch my-auto">
            {/* Render title words with the second word on a new line on small screens only */}
            {titleWords.length > 1 ? (
              <>
                <span className=" font-gilroy block max-md:hidden">
                  {titleWords[0]} {titleWords[1]}
                </span>
                <span className="hidden max-md:block">
                  {titleWords[0]}
                  <br />
                  {titleWords[1]}
                </span>
              </>
            ) : (
              title // If there's only one word, display it as is
            )}
          </div>
        </div>
      </div>
      <p className="self-stretch my-auto text-base leading-7 text-black w-[508px] max-md:max-w-full">
        {description}
      </p>
      <button
        className="flex gap-2 justify-center items-center self-stretch my-auto w-12 h-12 bg-cyan-500 min-h-[48px] rounded-[75px]"
        aria-label={`Learn more about ${title}`}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/180f8ed0b0abf06b4a59d3895ae3f9e4e332021918c4183c63f22ecb1f12af3a?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785"
          alt=""
          className="object-contain self-stretch my-auto w-4 aspect-square"
        />
      </button>
    </div>
  );
};

export default ServiceItem;
