import React from 'react'

function GetStarted() {
  return (
    <div className='w-full bg-[#090D0F]'>
        <div className='max-w-[1200px] mx-auto flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-[30px] py-[40px] md:py-[100px] lg:py-[112px]'>
             <div className="text-center w-[90%] sm:max-w-[80%] md:max-w-xl lg:max-w-3xl">
          <h1 className="text-white text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] lg:leading-[86px] lg:tracking-[-1.28px] bg-gradient-to-r from-white to-[#999] bg-clip-text text-transparent">
            Start Creating Today with FlowAI
          </h1>
          <p className="text-[#EFF2F5] opacity-80 text-sm sm:text-base md:text-[20px] lg:text-[24px] mt-4">
            Pick the plan that works for you, and take the first step towards effortless content creation.
          </p>
          <div className="mt-8 flex justify-center gap-4 sm:gap-8 flex-wrap text-base tracking-[-0.32px]">
            <button className="p-4 bg-white text-[#090D0F] w-[139px] rounded-[8px] font-medium hover:bg-gray-200 transition">
              Book a Demo
            </button>
            <button className="p-4 bg-[#007BFF] hover:bg-[#007BFF]/80 text-white rounded-[8px] font-medium transition">Get Started</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default GetStarted