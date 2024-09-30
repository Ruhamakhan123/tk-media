import React from "react";

const ConsultationCard: React.FC = () => {
  const handleBooking = () => {
    console.log("Booking initiated");
  };

  return (
    <div className="flex flex-col min-h-[472px] min-w-[240px] w-[509px] max-md:max-w-full">
      <div className="flex flex-col justify-center p-8 w-full bg-white rounded-[32px] max-md:px-5 max-md:max-w-full">
        <h3 className="text-3xl font-bold leading-10 text-black max-md:max-w-full">
          Schedule a 30-min FREE consultation
        </h3>
        <div className="flex gap-10 justify-between items-center p-4 mt-6 w-full bg-white rounded-2xl border border-cyan-500 border-solid max-md:max-w-full">
          <div className="flex gap-4 items-center self-stretch my-auto">
            <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-16 h-16 rounded-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/54a0307f9adade62d14ca411eff89538589905a20afe2a7468dec07edb14e778?placeholderIfAbsent=true&apiKey=93385a543be74ee9937d50a97d245785"
                className="object-cover w-full h-full rounded-full" // Ensure the image itself is rounded
                alt="Tam Khan"
              />
            </div>
            <div className="flex flex-col justify-center self-stretch my-auto font-semibold">
              <div className="text-xl tracking-normal leading-tight text-slate-950">
                Tam Khan
              </div>
              <div className="mt-1 text-sm tracking-normal leading-6 text-black">
                Founder - TK Media
              </div>
            </div>
          </div>
          <button
            onClick={handleBooking}
            className="gap-2 self-stretch px-6 py-2 my-auto text-base font-bold text-white whitespace-nowrap bg-cyan-500 rounded-[100px] max-md:px-5 hover:bg-cyan-600 transition-colors"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationCard;
