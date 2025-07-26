import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-full bg-[#090D0F] ">
      <div className="max-w-[1200px] md:border-t mx-auto flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-[30px] py-[54px]">
        <div className="pt-10 mx-auto max-w-8xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[18px] md:gap-[24px] lg:gap-20 ">
          <div>
            <h4 className="text-[20px] text-[#CED4DB] mb-4">For Talents</h4>
            <ul className="space-y-2 text-base text-[#CED4DB]">
              <li>
                <a href="#">Freelancer Tools</a>
              </li>
              <li>
                <a href="#">Content Templates</a>
              </li>
              <li>
                <a href="#">Profile Setup</a>
              </li>
              <li>
                <a href="#">Become a Partner</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[20px] text-[#CED4DB] mb-4">For Businesses</h4>
            <ul className="space-y-2 text-base text-[#CED4DB]">
              <li>
                <a href="#">Enterprise Solutions</a>
              </li>
              <li>
                <a href="#">Team Collaboration</a>
              </li>
              <li>
                <a href="#">Pricing & Plans</a>
              </li>
              <li>
                <a href="#">Talents</a>
              </li>
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[20px] text-[#CED4DB] mb-4">FlowAI Tools</h4>
            <ul className="space-y-2 text-base text-[#CED4DB]">
              <li>
                <a href="#">Content Generation</a>
              </li>
              <li>
                <a href="#">Analytics Dashboard</a>
              </li>
              <li>
                <a href="#">Publishing Tools</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
              <li>
                <a href="#">API Documentation</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[20px] text-[#CED4DB] mb-4">Resources</h4>
            <ul className="space-y-2 text-base text-[#CED4DB]">
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[20px] text-[#CED4DB] mb-4">For Companies</h4>
            <ul className="space-y-2 text-base text-[#CED4DB]">
              <li>
                <a href="#">Enterprise Solutions</a>
              </li>
              <li>
                <a href="#">Custom Integrations</a>
              </li>
              <li>
                <a href="#">Dedicated Support</a>
              </li>
              <li>
                <a href="#">Team Collaboration</a>
              </li>
              <li>
                <a href="#">Branding and Customization</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-8xl flex flex-wrap flex-col lg:flex-row md:border-t justify-between py-10 mt-20">
          <div className="flex items-center gap-2 md:mb-4 lg:mb-0">
            <Image
              src="/logo.svg"
              alt="FlowAI Logo"
              className="w-[52px] h-[43px]"
              width={52}
              height={43}
            />
            <span className="font-medium text-[18px] md:text-[24px] lg:text-[32px] text-[#F9FAFB]">
              FlowAI
            </span>
            <span className="text-base text-[#CED4DB] ml-4 whitespace-nowrap">
              © 2025 FlowAI, Inc
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 gap-4 text-base text-[#CED4DB]">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Status</a>

            <div className="flex items-center gap-3 ml-4">
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12Z"
                    fill="white"
                  />
                  <path
                    d="M18 8.25C17.55 8.475 17.1 8.55 16.575 8.625C17.1 8.325 17.475 7.875 17.625 7.275C17.175 7.575 16.65 7.725 16.05 7.875C15.6 7.425 14.925 7.125 14.25 7.125C12.675 7.125 11.475 8.625 11.85 10.125C9.825 10.05 8.025 9.075 6.75 7.575C6.075 8.7 6.45 10.125 7.5 10.875C7.125 10.875 6.75 10.725 6.375 10.575C6.375 11.7 7.2 12.75 8.325 13.05C7.95 13.125 7.575 13.2 7.2 13.125C7.5 14.1 8.4 14.85 9.525 14.85C8.625 15.525 7.275 15.9 6 15.75C7.125 16.425 8.4 16.875 9.75 16.875C14.325 16.875 16.875 13.05 16.725 9.525C17.25 9.225 17.7 8.775 18 8.25Z"
                    fill="#090D0F"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12Z"
                    fill="white"
                  />
                  <path
                    d="M11.9999 6.8999C13.6499 6.8999 13.8749 6.8999 14.5499 6.8999C15.1499 6.8999 15.4499 7.0499 15.6749 7.1249C15.9749 7.2749 16.1999 7.3499 16.4249 7.5749C16.6499 7.7999 16.7999 8.0249 16.8749 8.3249C16.9499 8.5499 17.0249 8.8499 17.0999 9.4499C17.0999 10.1249 17.0999 10.2749 17.0999 11.9999C17.0999 13.7249 17.0999 13.8749 17.0999 14.5499C17.0999 15.1499 16.9499 15.4499 16.8749 15.6749C16.7249 15.9749 16.6499 16.1999 16.4249 16.4249C16.1999 16.6499 15.9749 16.7999 15.6749 16.8749C15.4499 16.9499 15.1499 17.0249 14.5499 17.0999C13.8749 17.0999 13.7249 17.0999 11.9999 17.0999C10.2749 17.0999 10.1249 17.0999 9.4499 17.0999C8.8499 17.0999 8.5499 16.9499 8.3249 16.8749C8.0249 16.7249 7.7999 16.6499 7.5749 16.4249C7.3499 16.1999 7.1999 15.9749 7.1249 15.6749C7.0499 15.4499 6.9749 15.1499 6.8999 14.5499C6.8999 13.8749 6.8999 13.7249 6.8999 11.9999C6.8999 10.2749 6.8999 10.1249 6.8999 9.4499C6.8999 8.8499 7.0499 8.5499 7.1249 8.3249C7.2749 8.0249 7.3499 7.7999 7.5749 7.5749C7.7999 7.3499 8.0249 7.1999 8.3249 7.1249C8.5499 7.0499 8.8499 6.9749 9.4499 6.8999C10.1249 6.8999 10.3499 6.8999 11.9999 6.8999ZM11.9999 5.7749C10.2749 5.7749 10.1249 5.7749 9.4499 5.7749C8.7749 5.7749 8.3249 5.9249 7.9499 6.0749C7.5749 6.2249 7.1999 6.4499 6.8249 6.8249C6.4499 7.1999 6.2999 7.4999 6.0749 7.9499C5.9249 8.3249 5.8499 8.7749 5.7749 9.4499C5.7749 10.1249 5.7749 10.3499 5.7749 11.9999C5.7749 13.7249 5.7749 13.8749 5.7749 14.5499C5.7749 15.2249 5.9249 15.6749 6.0749 16.0499C6.2249 16.4249 6.4499 16.7999 6.8249 17.1749C7.1999 17.5499 7.4999 17.6999 7.9499 17.9249C8.3249 18.0749 8.7749 18.1499 9.4499 18.2249C10.1249 18.2249 10.3499 18.2249 11.9999 18.2249C13.6499 18.2249 13.8749 18.2249 14.5499 18.2249C15.2249 18.2249 15.6749 18.0749 16.0499 17.9249C16.4249 17.7749 16.7999 17.5499 17.1749 17.1749C17.5499 16.7999 17.6999 16.4999 17.9249 16.0499C18.0749 15.6749 18.1499 15.2249 18.2249 14.5499C18.2249 13.8749 18.2249 13.6499 18.2249 11.9999C18.2249 10.3499 18.2249 10.1249 18.2249 9.4499C18.2249 8.7749 18.0749 8.3249 17.9249 7.9499C17.7749 7.5749 17.5499 7.1999 17.1749 6.8249C16.7999 6.4499 16.4999 6.2999 16.0499 6.0749C15.6749 5.9249 15.2249 5.8499 14.5499 5.7749C13.8749 5.7749 13.7249 5.7749 11.9999 5.7749Z"
                    fill="#090D0F"
                  />
                  <path
                    d="M11.9999 8.7749C10.1999 8.7749 8.7749 10.1999 8.7749 11.9999C8.7749 13.7999 10.1999 15.2249 11.9999 15.2249C13.7999 15.2249 15.2249 13.7999 15.2249 11.9999C15.2249 10.1999 13.7999 8.7749 11.9999 8.7749ZM11.9999 14.0999C10.8749 14.0999 9.8999 13.1999 9.8999 11.9999C9.8999 10.8749 10.7999 9.8999 11.9999 9.8999C13.1249 9.8999 14.0999 10.7999 14.0999 11.9999C14.0999 13.1249 13.1249 14.0999 11.9999 14.0999Z"
                    fill="#090D0F"
                  />
                  <path
                    d="M15.2999 9.4499C15.7141 9.4499 16.0499 9.11412 16.0499 8.6999C16.0499 8.28569 15.7141 7.9499 15.2999 7.9499C14.8857 7.9499 14.5499 8.28569 14.5499 8.6999C14.5499 9.11412 14.8857 9.4499 15.2999 9.4499Z"
                    fill="#090D0F"
                  />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12Z"
                    fill="white"
                  />
                  <path
                    d="M8.7 18H6.15V9.975H8.7V18ZM7.425 8.85C6.6 8.85 6 8.25 6 7.425C6 6.6 6.675 6 7.425 6C8.25 6 8.85 6.6 8.85 7.425C8.85 8.25 8.25 8.85 7.425 8.85ZM18 18H15.45V13.65C15.45 12.375 14.925 12 14.175 12C13.425 12 12.675 12.6 12.675 13.725V18H10.125V9.975H12.525V11.1C12.75 10.575 13.65 9.75 14.925 9.75C16.35 9.75 17.85 10.575 17.85 13.05V18H18Z"
                    fill="#090D0F"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
