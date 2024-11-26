import React from "react";
import YoungsCards from "./YoungsCard";
import picture1 from "../../public/Rectangle 50.png";
import picture2 from "../../public/Rectangle 49.png";

function Favorite() {
  return (
    <div className="py-2 px-4 h-screen w-screen mt-14">
      <div className="relative">
        <h1 className="font-black text-[22.8px] my-5 mx-3 relative z-10">
          Young&apos;s Favourite
        </h1>
        <div
          className="absolute bg-[#EBD96B] w-[100px] h-[10px] rounded-tl-lg rounded-br-lg top-5 left-32"
          style={{ transform: "rotate(-10deg)" }}
        ></div>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-12 mt-8">
        <YoungsCards image={picture1} description="Trending On Instagram" />
        <YoungsCards image={picture2} description="All under $40" />
      </div>
    </div>
  );
}

export default Favorite;
