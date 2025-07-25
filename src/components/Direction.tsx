import React from "react";
import Image from "next/image";

function Direction() {
  const cardInfo = [
    {
      img: "/image17.svg",
      title: "Effortless Automation",
      desc: "Generate high-quality content in minutes—be it blog posts, social media updates, or email campaigns—tailored to your brand’s voice",
      imgOnBottom: false,
    },
    {
      img: "/image16.svg",
      title: "Automated Publishing",
      desc: "Effortlessly integrate FlowAI with your favorite tools and platforms. Connect to your CMS, social media, email tools, and more.",
      imgOnBottom: true,
    },
  ];

  return (
    <div className="w-full bg-[#F9F9F9]">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-[30px] py-[54px]">
        <div className="w-full sm:w-[90%] md:max-w-2xl lg:max-w-4xl">
          <p
            className="lg:text-[48px] md:text-[32px] sm:text-[24px] text-[20px] font-medium text-center bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(91deg, #898787 0.45%, #2B2020 103.06%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Power Behind FlowAI: Unlock Seamless Content Creation
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mt-[42px] ">
          {cardInfo.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F5F4F4] rounded-[24px] px-6 py-8 shadow-sm flex flex-col justify-between w-full h-auto"
            >
              <div
                className={`flex flex-col ${
                  card.imgOnBottom ? "order-2" : "order-1"
                } gap-[34px]`}
              >
                {!card.imgOnBottom && (
                  <Image
                    src={card.img}
                    alt={`Card ${idx + 1}`}
                    className="w-full rounded-md"
                    width={260}
                    height={123}
                  />
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
                </div>
                {card.imgOnBottom && (
                  <Image
                    src={card.img}
                    alt={`Card ${idx + 1}`}
                    className="w-full rounded-md"
                    width={260}
                    height={123}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#F5F4F4] rounded-[24px] px-6 py-8 shadow-sm flex flex-col lg:flex-row justify-between items-center gap-[109px] w-full mt-6">
          <Image
            src="/image14.svg"
            alt="Card 14"
            className="w-full rounded-md"
            width={260}
            height={123}
          />
          <div>
            <h3 className="font-semibold text-gray-900">
              Experience FlowAI and unlock the power of AI-driven content
              creation today!
            </h3>
            <p className="text-gray-600 text-sm">
              Effortlessly integrate FlowAI with your favorite tools and
              platforms. Connect to your CMS, social media, email tools, and
              more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Direction;
