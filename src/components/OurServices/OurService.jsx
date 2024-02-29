import React from "react";
import MemoQuickTransfer from "../../icons/QuickTransfer";
import MemoQuickWidthraw from "../../icons/QuickWithdrawal";
import MemoInvestment from "../../icons/Investment";
import MemoBusiness from "../../icons/Business";
import MemoPayment from "../../icons/Payment";
import MemoControl from "../../icons/Control";

const OurService = () => {
  return (
    <div className="bg-white py-5">
      <main className="md:flex items-center text-center flex-col hsection">
        <h3 className="text-[#0F322E] text-[1.2rem] font-[500] capitalize mb-3">
          our services
        </h3>
        <h1 className="text-[2.4rem] md:w-[40rem] text-center mb-4">
          Exclusive range of services to manage your finance and spending
        </h1>
        <p className=" text-[1.2rem] font-[300] md:px-[18rem] text-center mb-6">
          Enjoy a world of financial possibilities and full access to financial
          services personalized to your needs.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 py-6">
          {/*   Card 1   */}
          <div className="bg-[#F7F7F7] rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center flex-col space-y-6 h-full">
              <div className="flex-shrink-0">
                <MemoQuickTransfer />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-semibold capitalize mb-1">
                  quick transfer
                </h2>
                <p className="">
                  Send money to loved ones or business transaction in a
                  heartbeat.
                </p>
              </div>
            </div>
          </div>

          {/*   Card 2   */}
          <div className="bg-[#F7F7F7] rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center flex-col space-y-6 h-full">
              <div className="flex-shrink-0">
                <MemoQuickWidthraw />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-semibold capitalize mb-1">
                  quick withdrawal
                </h2>
                <p className="">
                  With oaypay, you have unlimited withdrawal of your money
                  anytime
                </p>
              </div>
            </div>
          </div>

          {/*   Card 3   */}
          <div className="bg-[#F7F7F7] rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center flex-col space-y-6 h-full">
              <div className="flex-shrink-0">
                <MemoInvestment />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-semibold capitalize mb-1">
                  savings & investment
                </h2>
                <p className="">
                  make a positive income from dividend paid directly to you when
                  you save & invest
                </p>
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="bg-[#F7F7F7] rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center flex-col space-y-6 h-full">
              <div className="flex-shrink-0">
                <MemoBusiness />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-semibold capitalize mb-1">
                  business loans
                </h2>
                <p className="">
                  Access business loans easily when you bank with us
                </p>
              </div>
            </div>
          </div>

          {/* card5 */}

          <div className="bg-[#F7F7F7] rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center flex-col space-y-6 h-full">
              <div className="flex-shrink-0">
                <MemoPayment />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-semibold capitalize mb-1">
                  bill payment
                </h2>
                <p className="">
                  paid bills instantly with our intuitive payment dashboard
                </p>
              </div>
            </div>
          </div>

          {/* card 6 */}

          <div className="bg-[#F7F7F7] rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center flex-col space-y-6 h-full">
              <div className="flex-shrink-0">
                <MemoControl />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-semibold capitalize mb-1">
                  budget control
                </h2>
                <p className="">
                  control and have budget of your finance with our budget
                  management
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurService;
