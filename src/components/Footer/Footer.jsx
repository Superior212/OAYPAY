import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
      <section className="hsection">
        <div className="md:flex items-center justify-center flex-col py-9">
          <h1 className="text-[#0F322E] capitalize md:text-[3rem] text-[2rem] font-[700] mb-8">
            move your money freely
          </h1>

          <p className="text-[#4B5560] md:w-[32rem] text-center mb-6">
            Send, Receive and Save money with zero troubles, any day!, anytime!
            it takes less than 5minutes.
          </p>

          <div className="flex justify-center">
            <button className="bg-[#C8F069] text-[#124340] px-4 p-3 rounded-[2rem]">
              Get started for free
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <h1 className="text-[5rem] font-[400] text-[#0F322E] mb-7">OAYPAY</h1>
          <p className="md:w-[30rem] text-center mb-12">
            We are a financial services company led by individuals with over
            35years collective investment banking, Corporate finance, retail
            banking & financial technology experience
          </p>

          <div className="md:flex items-start  justify-center  md:space-x-[5rem]">
            <div className="mb-8 md:mb-0">
              <h2 className="capitalize text-[#191919] text-[1.3rem] font-[600]">
                company
              </h2>
              <ul className="my-3">
                <li className="capitalize mb-2">about us</li>
                <li className="capitalize mb-2">our vision</li>
                <li className="capitalize mb-2">our mission</li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h2 className="capitalize text-[#191919] text-[1.3rem] font-[600]">
                personal
              </h2>
              <ul className="my-3">
                <li className="capitalize mb-2">account opening</li>
                <li className="capitalize mb-2 ">savings</li>
                <li className="capitalize mb-2">bills payments</li>
                <li className="capitalize mb-2">expenses tracker</li>
                <li className="capitalize mb-2">loans</li>
                <li className="capitalize mb-2">investment</li>
                <li className="capitalize mb-2">buy now pay later</li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h2 className="capitalize text-[#191919] text-[1.3rem] font-[600]">
                business
              </h2>
              <ul className="my-3">
                <li className="capitalize mb-2">business loans</li>
                <li className="capitalize mb-2">funds transfer</li>
                <li className="capitalize mb-2">inventory</li>
                <li className="capitalize mb-2">invoice generation</li>
                <li className="capitalize mb-2">book-keeping</li>
                <li className="capitalize mb-2">investment</li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h2 className="capitalize text-[#191919] text-[1.3rem] font-[600]">
                resources
              </h2>
              <ul className="my-3">
                <li className="capitalize mb-2">help center</li>
                <li className="capitalize mb-2">know more</li>
                <li className="capitalize mb-2">partnership</li>
                <li className="capitalize mb-2">atm center</li>
                <li className="capitalize mb-2">kYC verification</li>
                <li className="capitalize mb-2">blogs</li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h2 className="capitalize text-[#191919] text-[1.3rem] font-[600]">
                Follow us
              </h2>
              <ul className="my-3">
                <li className="capitalize mb-2">twitter</li>
                <li className="capitalize mb-2">linkeldn</li>
                <li className="capitalize mb-2">facebook</li>
                <li className="capitalize mb-2">Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
