import React from "react";
import Image from "next/image";
import shopifyImage from "../../public/shopify.png";
import amazonImage from "../../public/amazon.png";
import levisImage from "../../public/levis.png";
import HMImage from "../../public/HM.png";
import obeyImage from "../../public/obey.png";

function Brands() {
  return (
    <div className="flex flex-wrap justify-around bg-[#EBD96B] py-5 px-2 gap-3">
      <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32">
        <Image
          src={HMImage}
          alt="Brand Image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32">
        <Image
          src={obeyImage}
          alt="Brand Image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32">
        <Image
          src={shopifyImage}
          alt="Brand Image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32">
        <Image
          src={levisImage}
          alt="Brand Image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32">
        <Image
          src={levisImage}
          alt="Brand Image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32">
        <Image
          src={amazonImage}
          alt="Brand Image"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default Brands;
