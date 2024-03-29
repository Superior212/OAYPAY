import React from "react";
import hero from "../../assets/Images/hero.png";
import MemoHeroBg from "../../icons/HeroBg";

const Hero = () => {
  return (
    <div className="relative [background:linear-gradient(180deg,#1B544E_0%,#043F2D_45.5%,#043F2D_100%)] h-screen flex items-center md:pt-20 pt-28">
      <MemoHeroBg className="hidden md:block top-0 absolute h-full w-full " />
      <div
        className=" hsection
    ">
        <main className="md:flex  items-center relative justify-center ">
          <div className="text-white md:w-1/2 py-6 md:py-0 mb-5 md:mb-0">
            <h3 className="uppercase  text-[#C8F069] bg-[#245D50] rounded-xl w-fit  px-2 md:px-3 shadow-lg p-1 mb-5 md:mb-3">
              all in one banking for everyone
            </h3>
            <h1 className="font-[700] text-[1.8rem] md:text-[4rem] leading-none mb-4">
              Simple solution to your financial problems
            </h1>
            <p className="mb-7 md:pr-40">
              With our secure online banking services, you can manage your
              finances from everywhere, at any time.
            </p>
            <button className="bg-[#C8F069] text-[#124340] rounded-[2rem] p-2 px-4">
              Get started for free
            </button>
          </div>
          <div className="md:w-1/2 md:p-2" data-aos="fade-left">
            <img src={hero} alt="" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
