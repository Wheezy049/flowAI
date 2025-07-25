import React from "react";
import Image from "next/image";

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      quote:
        "FlowAI has revolutionized the way we create content. We're able to publish high-quality blogs and social media posts in minutes instead of hours",
      name: "Sophie M., Head of Content Strategy",
      image: "/person1.svg",
      bgColor: "#CCE5FFB2",
      textColor: "#323537",
    },
    {
      id: 2,
      quote:
        "The automated publishing and analytics have allowed us to focus more on strategy and less on the technical side. FlowAI is a game-changer!",
      name: "Alex T., Digital Marketing Lead",
      image: "/person2.svg",
      bgColor: "#090D0F",
      textColor: "#FFF",
    },
    {
      id: 3,
      quote:
        "As a small business, FlowAI has saved us time and boosted engagement across our channels. The AI-driven content creation is top-notch",
      name: "Rachel W., Blogger and Entrepreneur",
      image: "/person3.svg",
      bgColor: "#EFF2F5",
      textColor: "#323537",
    },
  ];

  return (
    <div className="w-full bg-[#F6F6F6]">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-start px-4 sm:px-8 md:px-12 lg:px-[30px] py-[54px]">
        <div className="w-[95%] sm:max-w-[90%] md:max-w-3xl lg:max-w-5xl">
          <h1
            className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[48px] font-medium bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(91deg, #898787 0.45%, #2B2020 103.06%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            See How <span className="font-bold">FlowAI</span> Is Changing the
            Game for Content Creators!
          </h1>
          <p className="text-black/50 opacity-80 text-sm sm:text-sm md:text-[18px] lg:text-[24px] mt-4">
            Join the thousands of businesses, and teams who trust FlowAI to
            streamline their content creation process and drive results.
          </p>
        </div>
        <div className="w-full mt-[100px] flex flex-col gap-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <Image
              src={testimonials[0].image}
              alt={testimonials[0].name}
              width={100}
              height={100}
              className="w-[350px] h-auto rounded-lg object-cover flex-shrink-0"
            />
            <div
              style={{
                backgroundColor: testimonials[0].bgColor,
                color: testimonials[0].textColor,
              }}
              className={`${testimonials[0].bgColor} ${testimonials[0].textColor} flex flex-1 flex-col justify-between rounded-lg px-6 py-10 gap-4`}
            >
              <p className="text-[32px] mb-4 leading-relaxed">
                &#34;{testimonials[0].quote}&#34;
              </p>
              <p className="text-[24px] font-medium">
                - {testimonials[0].name}
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div
              style={{
                backgroundColor: testimonials[1].bgColor,
                color: testimonials[1].textColor,
              }}
              className={`${testimonials[1].bgColor} ${testimonials[1].textColor} flex flex-col flex-1 justify-between rounded-lg px-6 py-10 gap-4`}
            >
              <p className="text-[32px] mb-4 leading-relaxed">
                &#34;{testimonials[1].quote}&#34;
              </p>
              <p className="text-[24px] font-medium">
                - {testimonials[1].name}
              </p>
            </div>
            <Image
              src={testimonials[1].image}
              alt={testimonials[1].name}
              className="w-[350px] h-auto rounded-lg object-cover flex-shrink-0"
              height={100}
              width={100}
            />
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <Image
              src={testimonials[2].image}
              alt={testimonials[2].name}
              className="w-[350px] h-auto rounded-lg object-cover flex-shrink-0"
              height={100}
              width={100}
            />
            <div
              style={{
                backgroundColor: testimonials[2].bgColor,
                color: testimonials[2].textColor,
              }}
              className={`${testimonials[2].bgColor} ${testimonials[2].textColor} flex flex-col flex-1 justify-between rounded-lg px-6 py-10 gap-4`}
            >
              <p className="text-[32px] mb-4 leading-relaxed">
                &#34;{testimonials[2].quote}&#34;
              </p>
              <p className="text-[24px] font-medium">
                - {testimonials[2].name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
