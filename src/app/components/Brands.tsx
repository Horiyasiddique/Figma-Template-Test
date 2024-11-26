import React from "react";
import Image from "next/image";
import shopifyImage from "../../public/shopify.png";
import amazonImage from "../../public/amazon.png";
import levisImage from "../../public/levis.png";
import HMImage from "../../public/HM.png";
import obeyImage from "../../public/obey.png";

function Brands() {
  return (
    <div className="flex justify-around bg-[#EBD96B] py-[1.2rem] flex-wrap">
      <Image src={HMImage} alt="Brand Image"></Image>
      <Image src={obeyImage} alt="Brand Image"></Image>
      <Image src={shopifyImage} alt="Brand Image"></Image>
      <Image src={levisImage} alt="Brand Image"></Image>
      <Image src={levisImage} alt="Brand Image"></Image>
      <Image src={amazonImage} alt="Brand Image"></Image>
    </div>
  );
}

export default Brands;
