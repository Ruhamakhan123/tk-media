import React from "react";
import Image from "next/image";
import img1 from "@/public/Screenshot 2024-09-02 144452.jpg"; // Replace with actual image paths
import img2 from "@/public/image 35.jpg";
import img3 from "@/public/Screenshot 2024-09-02 144506.jpg";

const Clients = () => {
  return (
    <div className="flex flex-col bg-white py-12 px-6 lg:px-24 space-y-10">
      {/* Flex layout for text and image sections */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          We deliver top notch results to our clients & partners
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Welcome to TK Media Group, your premier partner in the digital world.
          At TK Media Group, we believe in the power of creativity and strategy
          to elevate your brand’s presence and engagement across various digital
          platforms.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-4 justify-center items-center">
        {/* Reduced size for large image on the left */}
        <div className="col-span-1">
          <Image
            src={img1}
            alt="Client 1"
            className="rounded-lg object-cover"
            layout="responsive"
            width={300} // Reduced width for smaller appearance
            height={400} // Adjusted for proportionate height
          />
        </div>
        {/* Two smaller images on the right */}
        <div className="col-span-2 grid grid-rows-2 gap-4">
          <div>
            <Image
              src={img2}
              alt="Client 2"
              className="rounded-lg object-cover"
              layout="responsive"
              width={300} // Adjusted width
              height={200} // Adjusted height
            />
          </div>
          <div>
            <Image
              src={img3}
              alt="Client 3"
              className="rounded-lg object-cover"
              layout="responsive"
              width={300} // Adjusted width
              height={200} // Adjusted height
            />
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex items-center justify-center mt-6">
        <button className="bg-[#00bbd2] text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-[#00a5bc] transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Clients;
