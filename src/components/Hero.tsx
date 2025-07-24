import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: "url('/background.svg')" }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center pt-[60px] sm:pt-[80px] md:pt-[100px]">
        <div className="text-center w-[90%] sm:max-w-[80%] md:max-w-xl lg:max-w-3xl">
          <h1 className="text-white text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] lg:leading-[86px] lg:tracking-[-1.28px] bg-gradient-to-r from-white to-[#999] bg-clip-text text-transparent">
            Create, Automate, Scale all with <span className="font-bold">FlowAI</span>
          </h1>
          <p className="text-[#EFF2F5] opacity-80 text-sm sm:text-base md:text-[20px] lg:text-[24px] mt-4">
            Let AI take the wheel in content creation. From idea to publish, we’ve got you covered.
          </p>
          <div className="mt-8 flex justify-center gap-4 sm:gap-8 flex-wrap text-base tracking-[-0.32px]">
            <button className="p-4 bg-white text-[#090D0F] w-[139px] rounded-[8px] font-medium hover:bg-gray-200 transition">
              Book a Demo
            </button>
            <button className="p-4 text-white">Try it now</button>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <Image
            src="/image 1.svg"
            alt="hero image"
            width={965}
            height={622}
            className="w-full max-w-[300px] sm:max-w-[354px] md:max-w-[662px] lg:max-w-[965px] h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
