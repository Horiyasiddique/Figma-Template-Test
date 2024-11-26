import React from "react";
import Image from "next/image";
import mobileImage from "../../public/Mobile app.png";
import { RiAppleFill } from "react-icons/ri";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Mobile() {
  return (
    <div className="w-screen h-screen py-5 px-14 flex justify-between items-center">
      <div className="flex flex-col justify-center gap-7 ">
        <div className="font-black text-5xl">
          <h2>DOWNLOAD APP &</h2>
          <h2>GET THE VOUCHER!</h2>
        </div>
        <div className="font-medium text-2xl w-[500px]">
          get 30% off for first transaction using Rondovision mobile app for
          now.
        </div>
        {/* button container */}
        <div className="flex justify-center items-center gap-5">
          {/* button 1 */}
          <button className="bg-black text-white w-[11.75rem] h-[4.438rem] rounded-xl gap-7 flex justify-center items-center">
            <div className="flex">
              <div className="text-4xl">
                <RiAppleFill />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Download on the</p>
                <h2 className="text-xl">App store</h2>
              </div>
            </div>
          </button>

          {/* button 2 */}
          <button className="bg-black text-white w-[11.75rem] h-[4.438rem] rounded-xl gap-7 flex justify-center items-center">
            <div className="flex">
              <div className="text-4xl">
                <IoLogoGooglePlaystore />
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Download on the</p>
                <h2 className="text-xl">App store</h2>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div>
        <Image
          src={mobileImage}
          alt="get the app"
          className="h-[600px] w-[400px]"
        ></Image>
      </div>
    </div>
  );
}

export default Mobile;
