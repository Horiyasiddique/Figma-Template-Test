import React from "react";
import Image from "next/image";
import heroImage from "../../public/hero.png";

function Hero() {
  return (
    <div className="sm:flex-col w-screen h-screen py-5 px-10 bg-[#F4F6F5] md:flex-row flex items-center justify-between relative overflow-hidden">
      <div className="flex flex-col gap-5">
        <div className="font-black text-[5rem]">
          <h2 className="bg-white py-0 px-2 inline-block">LET&apos;s</h2>
          <h2>EXPLORE</h2>
          <h2 className="bg-[#EBD96B] py-0 px-2 inline-block">UNIQUE</h2>
          <h2 className=" py-0 px-2 inline-block">CLOTHES</h2>
        </div>
        <div className="font-medium text-black text-[1.8rem]">
          live for influential and innovative fashion
        </div>

        <div>
          <button className="bg-black py-2 px-3 text-white rounded-md mt-3">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="relative w-[50%] h-full">
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
