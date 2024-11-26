import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { StaticImageData } from "next/image";
interface CardProps {
  image: StaticImageData;
  description: string;
}
function Cards({ image, description }: CardProps) {
  return (
    <div className="cursor-pointer hover:scale-105 transition-all duration-200 ease-in">
      <Image src={image} alt="new arrivals in Market"></Image>
      <div className="flex justify-between items-center">
        <p className="text-[0.95rem] font-medium text-[#191919] mt-1">
          {description}{" "}
        </p>
        <FaArrowRight className="text-slate-500 font-bold" />
      </div>

      <p className="font-medium  text-[0.713rem] text-[#7f7f7f] mt-1">
        {" "}
        Explore Now
      </p>
    </div>
  );
}

export default Cards;
