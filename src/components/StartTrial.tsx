import React from "react";

function StartTrial() {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: "url('/background.svg')" }}
    >
      <div className="max-w-[1200px] lg:mx-auto flex flex-col justify-start pt-[76px] md:px-[15px] pb-[95px] lg:px-[30px]">
        <div className="w-[95%] sm:max-w-[90%] md:max-w-xl lg:max-w-3xl">
          <h1 className="text-white text-[20px] sm:text-[24px] md:text-[32px] lg:text-[48px]  bg-gradient-to-r from-white to-[#999] bg-clip-text text-transparent">
            Take the Leap into Effortless Content Creation
          </h1>
          <p className="text-[#EFF2F5] opacity-80 text-sm sm:text-base md:text-[20px] lg:text-[24px] mt-4">
            Whether you&#39;re a small business, a freelancer, or an enterprise,
            FlowAI can help you scale your content and drive results
            effortlessly.
          </p>
          <div className="mt-8 flex gap-4 sm:gap-8 text-base">
            <button className="p-4 bg-white text-[#090D0F] rounded-[8px] font-medium hover:bg-gray-200 transition">
              Start your free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartTrial;
