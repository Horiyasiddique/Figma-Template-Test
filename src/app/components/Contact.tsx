import React from "react";

function Contact() {
  return (
    <div className="bg-[#E5C643] h-screen w-screen flex justify-center items-center flex-col gap-8">
      <div className="w-3/4 text-[1.9rem] md:text-[3rem] font-black text-white text-center">
        <h2> JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
        <p className="font-normal text-xl md:text-2xl">
          {" "}
          Type your email down below and be young wild generation
        </p>
      </div>

      <div>
        <div className="sm:w-[24vw] md:w-[27.042vw] flex justify-between items-center bg-white py-3 px-4 rounded-lg">
          <p className="text-slate-400 text-xl">Add your email here</p>
          <button className="bg-black text-white text-[1.3rem] text-center py-1 px-5 rounded-lg">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
