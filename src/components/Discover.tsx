import Image from "next/image";
import React from "react";

function Discover() {
  const cardInfo = [
    {
      img: "/image 10.svg",
      title: "AI-Powered Content Generation",
      desc: "Generate blog posts, social media content, and more with FlowAI's intelligent engine, tailored to your needs.",
      imgOnBottom: false,
    },
    {
      img: "/image 11.svg",
      title: "Automated Publishing",
      desc: "Publish across multiple platforms with one click, saving time and ensuring consistency across your channels.",
      imgOnBottom: true,
    },
    {
      img: "/image 12 (1).svg",
      title: "Real-Time Collaboration",
      desc: "Collaborate with your team seamlessly. Share, edit, and approve content in real time with no hassle.",
      imgOnBottom: false,
    },
    {
      img: "/image 15.svg",
      title: "Performance Analytics",
      desc: "Track content performance with real-time insights, helping you optimize your strategy and improve engagement.",
      imgOnBottom: false,
    },
    {
      img: "/image 12.svg",
      title: "Content Personalization",
      desc: "Customize content to different audiences with FlowAI's built-in personalization tools to maximize relevance.",
      imgOnBottom: false,
    },
    {
      img: "/image 10.svg",
      title: "SEO Optimization",
      desc: "Boost your content's reach with built-in SEO tools that ensure your content is optimized for search engines.",
      imgOnBottom: false,
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: "url('/background (2).svg')" }}
    >
      <div className="max-w-[1200px] lg:mx-auto flex flex-col justify-center pt-[76px] md:px-[15px] pb-[95px] lg:px-[30px]">
        <div className="w-full sm:w-[90%] md:max-w-2xl lg:max-w-4xl">
          <h1 className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[48px] font-medium bg-gradient-to-r from-[#898787] to-[#2B2020] bg-clip-text text-transparent">
            Transform Your Content Creation with FlowAI&#39;s Cutting-Edge
            Features
          </h1>
          <p className="text-[1p4x] sm:text-[184px] md:text-[18px] lg:text-[24px] text-[#323537] opacity-80 mt-4">
            Discover how FlowAI&#39;s powerful AI-driven tools streamline your
            content creation process, allowing you to save time and elevate your
            brand’s presence effortlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-[42px]">
          {cardInfo.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[12px] p-6 shadow-sm flex flex-col justify-between max-w-[417px] max-h-[307px] h-[307px]"
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
      </div>
    </div>
  );
}

export default Discover;
