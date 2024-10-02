"use client";
import React from "react";
import CarouselHeader from "./CarouselHeader";
import img1 from "@/public/image 36.jpg";
import img2 from "@/public/image 37.jpg";
import img3 from "@/public/image 30.jpg";
import img4 from "@/public/image 38.jpeg";
import img5 from "@/public/image 39.jpeg";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { CardContent } from "../ui/card";

const images = [img1, img2, img3, img4, img5];

const InfluencerCarousel: React.FC = () => {
  return (
    <div id="influencer" className="flex flex-col w-full">
      <div className="flex overflow-hidden flex-col justify-center items-center p-32 bg-black max-md:px-5 max-md:py-24 relative">
        <CarouselHeader />
        {/* Carousel Images Container */}
        <Carousel className="relative">
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-full md:basis-1/3"
              >
                <div className="p-1">
                  <CardContent className="flex items-center justify-center p-1">
                    <Image
                      src={image.src}
                      alt={`image-${index}`}
                      width={500}
                      height={500}
                      className="w-[500px] h-[500px] object-cover rounded-md"
                    />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Carousel Navigation */}
          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 max-md:left-1" />
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 max-md:right-1" />
        </Carousel>
      </div>
    </div>
  );
};

export default InfluencerCarousel;
