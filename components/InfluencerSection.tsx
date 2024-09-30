import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import img1 from "@/public/image 30.jpg"; // Replace with actual image paths
import img2 from "@/public/image 36.jpg";
import img3 from "@/public/image 37.jpg";

const InfluencerSection = () => {
  return (
    <div className="bg-black text-white py-12 px-6 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-4">
        TK Media is Loved by{" "}
        <span className="text-[#00bbd2]">influencers!</span>
      </h2>
      <p className="text-center mb-8">
        Welcome to TK Media Group, your premier partner in the digital world. At
        TK Media Group, we believe in the power of creativity.
      </p>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={img1.src}
            alt="Influencer 1"
            className="object-cover w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2.src}
            alt="Influencer 2"
            className="object-cover w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3.src}
            alt="Influencer 3"
            className="object-cover w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default InfluencerSection;
