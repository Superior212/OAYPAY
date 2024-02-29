import React from "react";
import MemoTransaction from "../../icons/Transaction";
import MemoTransfer from "../../icons/Transfer";
import MemoSecurity from "../../icons/Security";
import MemoMoney from "../../icons/Money";

export const WhyChooseUs = () => {
  return (
    <div className="bg-[#0F322E] py-5">
      <main className="text-white hsection">
        <div
          className=" py-9"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <h2 className="text-[#C8F069] mb-3 ">Why choose us?</h2>
          <h1 className="font-[500] text-[2.2rem] md:w-[28rem] mb-4">
            Access your financial services all in one app
          </h1>
          <p>
            We stand out for their convenience, cost savings, and enhanced
            security. <br className="hidden sm:inline" /> Customers can manage
            their finances from anywhere using their{" "}
            <br className="hidden sm:inline" /> computer or mobile device.
          </p>
        </div>

        <div className="md:flex justify-between py-6">
          {/* <!-- Card 1 --> */}
          <div className="md:w-1/4 p-6  ">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#144E43]">
              {/* Icon  */}

              <MemoTransfer />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-[700] text-white">
                Superfast transfer
              </h2>
              <p className="mt-2 text-white md:w-60">
                Send and receive funds at superfast speed when you use the GAP
                app.
              </p>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="md:w-1/4 p-6  ">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#144E43]">
              {/* Icon  */}
              <MemoTransaction />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-[700] text-white">
                Transaction insights
              </h2>
              <p className="mt-2 text-white md:w-60">
                Determine what habits you feed the most with our daily, weekly
                insights
              </p>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="md:w-1/4 p-6  ">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#144E43]">
              {/* Icon  */}
              <MemoSecurity />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-[700] text-white capitalize">
                topnotch security
              </h2>
              <p className="mt-2 text-white md:w-60">
                we keep your data save from fraud with our 2FA security features
                encrypted end to end
              </p>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="md:w-1/4 p-6  ">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#144E43]">
              {/* Icon  */}
              <MemoMoney />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-[700] text-white capitalize">
                earn while you save
              </h2>
              <p className="mt-2 text-white md:w-60">
                enjoy up to 15% annual interest on your savings when you choose
                any saving plans
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
