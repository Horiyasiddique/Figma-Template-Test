import React from "react";
import Image from "next/image";
import PaydayImage from "../../public/payday-img.png";

function Payday() {
  return (
    <div className="mt-9 w-screen h-screen py-5 px-5 md:px-10 bg-[#F7DB53] flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
      {/* Left Image Section */}
      <div className="relative w-full lg:w-[50%] h-[300px] md:h-[400px] lg:h-full">
        <Image
          src={PaydayImage}
          alt="its an image for banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="flex flex-col gap-5 text-center lg:text-left mt-5 lg:mt-0 lg:pl-10">
        <div className="font-black text-[2.5rem] md:text-[4rem] lg:text-[6.3rem] leading-tight">
          <h2 className="bg-white py-0 px-2 inline-block">PAYDAY</h2>
          <h2>SALE NOW</h2>
        </div>
        <div className="font-medium text-black text-[1rem] md:text-[1.2rem] lg:text-[1.8rem] max-w-full lg:max-w-[500px]">
          Spend minimal $100 and get 30% off voucher code for your next purchase
        </div>
        <div>
          <h3 className="font-bold text-black text-[1rem] md:text-[1.3rem] lg:text-[1.7rem]">
            1 June - 10 June 2021
          </h3>
          <p className="font-normal text-black text-[0.9rem] md:text-[1.2rem] lg:text-[1.5rem]">
            Terms & Condition apply
          </p>
        </div>
        <div>
          <button className="bg-black py-2 px-4 text-white rounded-md mt-3">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payday;
