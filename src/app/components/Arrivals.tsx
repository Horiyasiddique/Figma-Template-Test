import React from "react";
import image1 from "../../public/Rectangle 22.png";
import image2 from "../../public/Rectangle 21.png";
import image3 from "../../public/Rectangle 20.png";

import Cards from "./Cards";
function Arrivals() {
  return (
    <div className="py-2 px-4">
      <div className="relative">
        <h1 className="font-black text-[22.8px] my-5 mx-3 relative z-10">
          New Arrivals
        </h1>
        <div
          className="absolute bg-[#EBD96B] w-[100px] h-[10px] rounded-tl-lg rounded-br-lg top-5 left-20"
          style={{ transform: "rotate(-10deg)" }}
        ></div>
      </div>
      <div className="flex items-center justify-around flex-wrap gap-5">
        <Cards image={image3} description="Hoodies & Sweetshirt" />

        <Cards image={image2} description="Coats & Parkas" />

        <Cards image={image1} description="Tees & T-Shirt" />
      </div>
    </div>
  );
}

export default Arrivals;
