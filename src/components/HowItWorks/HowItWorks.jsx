import React from "react";
import MemoDownload from "../../icons/Download";
import MemoVerify from "../../icons/Verify";
import MemoService from "../../icons/Service";
import Phones from "../../assets/Images/phones.png";

const HowItWorks = () => {
  return (
    <div className="bg-white py-5 overflow-hidden" data-aos="fade-up">
      <main className="text-[#191919] hsection">
        <div className="py-9">
          <h2 className="text-[#0F322E] mb-3 capitalize">how it works</h2>
          <h1 className="font-[500] text-[2.2rem] md:w-[28rem] mb-4">
            A free bank account to power your financial
          </h1>
          <p>Easy 3 steps to use our services</p>
        </div>

        <div className="md:flex  items-center justify-center">
          <div className="md:w-1/2">
            {/* Card 1 */}
            <div className="p-6 mb-6 md:mb-0">
              {/* Icon */}
              <div className="flex items-center mb-4">
                <MemoDownload />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-[#0F322E] capitalize mb-2">
                    download app & sign up
                  </h2>
                  <p className="text-[#0F322E]">
                    First download our app on apple store or google store and
                    register
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="p-6 mb-6 md:mb-0">
              {/* Icon */}
              <div className="flex items-center mb-4">
                <MemoVerify />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-[#0F322E] capitalize mb-2">
                    verify your account
                  </h2>
                  <p className="text-[#0F322E]">
                    Provide any means of identification to verify your details
                    to secure account
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="p-6">
              {/* Icon */}
              <div className="flex items-center mb-4">
                <MemoService />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-[#0F322E] capitalize mb-2">
                    start enjoying services
                  </h2>
                  <p className="text-[#0F322E]">
                    Enjoy our unlimited services like send, transfer, receive,
                    pay bills and more
                  </p>
                </div>
              </div>
            </div>
            {/* Button */}
            <button className="bg-[#C8F069] p-4 rounded-[5rem] md:mx-6 my-3">
              Get started for free
            </button>
          </div>

          <div className="md:w-1/2 md:p-6 my-10 md:my-0" data-aos="fade-left">
            <img src={Phones} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
};
export default HowItWorks;
