import React from "react";

interface TrustedBadgeProps {
  influencerCount: number;
}

const TrustedBadge: React.FC<TrustedBadgeProps> = ({ influencerCount }) => {
  return (
    <div className="flex gap-2.5 justify-center items-center px-2.5 py-2 text-xs font-semibold tracking-wide leading-6 text-black uppercase bg-cyan-50 rounded-lg border border-cyan-500 border-solid">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4166007c4c21961a1f158154a1234bcee63e7e7449d38e299d1aa14ee0611c0d?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785"
        alt=""
        className="object-contain shrink-0 gap-0 self-stretch my-auto w-14 aspect-[2.33]"
      />
      <div className="self-stretch my-auto">
        trusted by <span className="text-cyan-500">{influencerCount}+</span>{" "}
        influencers
      </div>
    </div>
  );
};

export default TrustedBadge;
