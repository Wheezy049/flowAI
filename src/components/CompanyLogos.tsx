import Image from "next/image";
import React from "react";

function CompanyLogos() {
  return (
    <div className="w-full bg-[#FDFDFD]">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center sm:items-center lg:items-start px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10  lg:px-[30px] lg:py-[58px]">
        <p className="text-sm md:text-[18px] lg:text-xl text-[#323537] opacity-80">
          Trusted by 17 million users at leading companies
        </p>
        <div className="flex flex-wrap gap-4 items-center lg:justify-between py-3 w-full">
          <Image
            src="image 2.svg"
            alt="company logo"
            width={103}
            height={18}
            className="max-w-[40px] sm:max-w-[60px] md:max-w-[90px] lg:max-w-[103px] h-auto"
          />
          <Image
            src="image 3.svg"
            alt="company logo"
            width={103}
            height={18}
            className="max-w-[40px] sm:max-w-[60px] md:max-w-[90px] lg:max-w-[103px] h-auto"
          />
          <Image
            src="image 4.svg"
            alt="company logo"
            width={103}
            height={18}
            className="max-w-[40px] sm:max-w-[60px] md:max-w-[90px] lg:max-w-[103px] h-auto"
          />
          <Image
            src="image 5.svg"
            alt="company logo"
            width={103}
            height={18}
            className="max-w-[40px] sm:max-w-[60px] md:max-w-[90px] lg:max-w-[103px] h-auto"
          />
          <Image
            src="image 6.svg"
            alt="company logo"
            width={103}
            height={18}
            className="max-w-[40px] sm:max-w-[60px] md:max-w-[90px] lg:max-w-[103px] h-auto"
          />
          <Image
            src="image 7.svg"
            alt="company logo"
            width={103}
            height={18}
            className="max-w-[40px] sm:max-w-[60px] md:max-w-[90px] lg:max-w-[103px] h-auto"
          />
          <Image
            src="image 8.svg"
            alt="company logo"
            width={103}
            height={18}
            className="max-w-[40px] sm:max-w-[60px] md:max-w-[90px] lg:max-w-[103px] h-auto"
          />
          <Image
            src="image 9.svg"
            alt="company logo"
            width={103}
            height={18}
            className="max-w-[40px] sm:max-w-[60px] md:max-w-[90px] lg:max-w-[103px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default CompanyLogos;
