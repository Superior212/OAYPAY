import React from "react";
import domore from "../../assets/Images/domore.png";
import money from "../../assets/Images/money.png";
import MemoTick from "../../icons/Tick";
import MemoMark from "../../icons/Mark";

const DoMore = () => {
  return (
    <div className="bg-white py-5 " data-aos="fade-up">
      <main className="text-[#191919] hsection">
        <div className="md:flex items-center justify-center">
          <div className=" py-9 md:w-1/2 md:flex space-y-9 flex-col">
            <h2 className="text-[#0F322E] mb-3 capitalize">do more with us</h2>
            <h1 className="font-[500] text-[2.5rem] md:w-[28rem] mb-4">
              Helping students and youth do more with zero access banking
            </h1>
            <p className="md:w-[32rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="flex items-center space-x-2">
                <MemoMark />
                <p className="capitalize">easy collection system</p>
              </div>
              <div className="flex items-center space-x-2">
                <MemoMark />
                <p className="capitalize">less repayment fees</p>
              </div>
              <div className="flex items-center space-x-2">
                <MemoMark />
                <p className="capitalize">flexible repayment plan</p>
              </div>
              <div className="flex items-center space-x-2">
                <MemoMark />
                <p className="capitalize">easy loan banking</p>
              </div>
            </section>
          </div>

          <div className="md:w-1/2 md:p-9">
            <img src={domore} alt="" />
          </div>
        </div>

        {/* section 2 */}
        <div className="md:flex items-center justify-center md:my-0 my-10">
          <div className=" py-9 md:w-1/2 block space-y-9 flex-col md:hidden">
            <h2 className="text-[#0F322E] mb-3 capitalize">do more with us</h2>
            <h1 className="font-[500] text-[2.5rem] md:w-[28rem] mb-4">
              Be in complete control over your money
            </h1>
            <p className="md:w-[32rem]">
              our customers can have peace of mind knowing that their personal
              and financial information is secure with their account. your
              gateway to life free of stress is to be in control of your
              financial
            </p>

            <button className="md:block hidden bg-[#C8F069] rounded-[2rem] p-2 w-fit px-6 text-[#124340]">
              Get started for free
            </button>
          </div>
          <div className="md:w-1/2 md:p-9">
            <img src={money} alt="" />
          </div>
          <div className=" py-9 md:w-1/2 md:flex space-y-9 flex-col hidden">
            <h2 className="text-[#0F322E] mb-3 capitalize">do more with us</h2>
            <h1 className="font-[500] text-[2.5rem] md:w-[28rem] mb-4">
              Be in complete control over your money
            </h1>
            <p className="md:w-[32rem]">
              our customers can have peace of mind knowing that their personal
              and financial information is secure with their account. your
              gateway to life free of stress is to be in control of your
              financial
            </p>

            <button className="bg-[#C8F069] rounded-[2rem] p-2 w-fit px-6 text-[#124340]">
              Get started for free
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoMore;
