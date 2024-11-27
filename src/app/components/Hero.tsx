import React from "react";
import Image from "next/image";
import heroImage from "../../public/hero.png";

function Hero() {
  return (
    <div className="w-screen h-screen py-5 px-5 bg-[#F4F6F5] flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
      {/* Left Content */}
      <div className="flex flex-col gap-5 text-center lg:text-left">
        <div className="font-black text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-tight">
          <h2 className="bg-white py-0 px-2 inline-block">LET&apos;S</h2>
          <h2>EXPLORE</h2>
          <h2 className="bg-[#EBD96B] py-0 px-2 inline-block">UNIQUE</h2>
          <h2 className="py-0 px-2 inline-block">CLOTHES</h2>
        </div>
        <div className="font-medium text-black text-[1rem] md:text-[1.2rem] lg:text-[1.8rem]">
          Live for influential and innovative fashion
        </div>
        <div>
          <button className="bg-black py-2 px-4 text-white rounded-md mt-3">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full lg:w-[50%] h-[300px] md:h-[400px] lg:h-full mt-5 lg:mt-0">
        <Image
          src={heroImage}
          alt="its an image for banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;

