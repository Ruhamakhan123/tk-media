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

const images = [
  img1,
  img2,
  img3,
  "https://instagram.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/460251676_18457685356022653_6444824435789375900_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fkhi2-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=7_fdwZ5Zd98Q7kNvgGoNwtR&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzQ1OTY0NjEyNDYxMzE4NzgyNA%3D%3D.3-ccb7-5&oh=00_AYDeR0_4BLRQVMte-rJECmPNPwIHQmh_zFI-A6RNW9AFAg&oe=67032A2F&_nc_sid=7a9f4b",
  "https://instagram.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/460809307_18458347783022653_6567948652019243894_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTQuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fkhi2-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=BbKcUPPRfSQQ7kNvgGFNbO9&_nc_gid=a1034c70376546029f0801b20514cca3&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzQ2MjE5ODYwMDA0NDkwMTQ0OQ%3D%3D.3-ccb7-5&oh=00_AYCoATASr-jky08-pozT8DRey3KZYkUjpPxvwezpEAfHRw&oe=67030CBB&_nc_sid=7a9f4b",
];

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
                      src={image}
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
