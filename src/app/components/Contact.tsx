import React from "react";

function Contact() {
  return (
    <div className="bg-[#E5C643] h-screen w-screen flex justify-center items-center flex-col gap-8">
      <div className="text-[3.158rem] font-black text-white text-center">
        <h2> JOIN SHOPPING COMMUNITY TO</h2>
        <h2> GET MONTHLY PROMO</h2>
      </div>
      <div className="text-center text-3xl font-normal text-white">
        Type your email down below and be young wild generation
      </div>
      <div>
        <div className="w-[27.042vw] flex justify-between items-center bg-white py-3 px-4 rounded-lg">
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
