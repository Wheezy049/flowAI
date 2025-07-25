import React from "react";
import { Zap, Link, BarChart3 } from "lucide-react";

function Feature() {
  const features = [
    {
      id: 1,
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Effortless Automation",
      description:
        "Generate high-quality content instantly, tailored to your specific needs, with FlowAI's intelligent engine.",
    },
    {
      id: 2,
      icon: <Link className="w-8 h-8 text-blue-500" />,
      title: "Seamless Integration",
      description:
        "Connect FlowAI effortlessly with your favorite platforms, from social media to email marketing tools.",
    },
    {
      id: 3,
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "Real-Time Analytics",
      description:
        "Track your content's performance in real time, with actionable insights to optimize your strategy.",
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-[30px] py-[54px]">
        <div className="text-center mb-16">
          <h2
            className="text-xl sm:text-[24px] text-[32px] lg:text-5xl font-bold mb-6 leading-tight text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(91deg, #898787 0.45%, #2B2020 103.06%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Empowering Your Content Creation with{" "}
            <span className="block mt-2">Cutting-Edge Features</span>
          </h2>

          <p className="text-[#323537] opacity-80 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            &#34;FlowAI streamlines content creation with AI-driven tools for
            generating high-quality content, seamless integrations, and
            real-time performance tracking—saving you time and boosting your
            impact.&#34;
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 ${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {" "}
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-[18px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;
