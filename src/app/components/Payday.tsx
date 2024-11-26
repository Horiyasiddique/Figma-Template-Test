
import React from "react";
import Image from "next/image";
import PaydayImage from "../../public/payday-img.png";

function Payday() {
  return (
    <div className="mt-9 w-screen h-screen py-5 px-10 bg-[#F7DB53] flex items-center justify-between relative overflow-hidden">
      <div className="relative w-[50%] h-full">
        <Image
          src={PaydayImage}
          alt="its an image for banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="font-black text-[6.3rem]">
          <h2 className="bg-white py-0 px-2 inline-block">PAYDAY</h2>
          <h2>SALE NOW</h2>
        </div>
        <div className="font-medium text-black text-[1.8rem] w-[500px]">
          Spend minimal $100 and get 30% off voucher code for your next purchase
        </div>
        <div>
          <h3 className="font-bold text-black text-[1.7rem]">1 June - 10 June 2021</h3>
          <p className="font-normal text-black text-[1.5rem]">Terms & Condition apply</p>
        </div>
        <div>
          <button className="bg-black py-2 px-3 text-white rounded-md mt-3">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payday;
