import React from "react";
import profile1 from "../../assets/Images/profile1.png";
import MemoStar from "../../icons/Star";

const Testimonials = () => {
  return (
    <div className="bg-[#0F322E] text-white py-6">
      <main className="hsection">
        <div className="text-center flex items-center flex-col">
          <h3 className="text-[#C8F069] capitalize mb-3">our testimonials</h3>
          <h1 className="font-[700] text-[2.4rem] md:w-[38rem] mb-4">
            Hear what the millions people say about us
          </h1>
          <p>here are some reviews from some of our esteemed customers</p>
        </div>

        <div className="flex flex-col sm:flex-row py-10">
          {/*  Testimonial 1  */}
          <div
            className="bg-[#144E43] rounded-lg shadow-md p-6 mb-4 sm:mb-0 sm:mr-4"
            style={{ flex: "1 1 auto" }}>
            <p className="h-40">
              OAYPAY has revolutionized the way I manage my finances. With their
              intuitive platform, I can easily track my expenses, make payments,
              and even plan for investments. It's like having a financial
              advisor right at my fingertips.
            </p>
            <div className="bg-[#B7BFC733] w-full h-[0.1rem]" />
            <div className="mt-4 flex items-center">
              <img
                src={profile1}
                alt="Profile Picture"
                className="h-8 w-8 rounded-full mr-2"
              />
              <div>
                <p className="capitalize">noheem nysc</p>
                <div className="flex gap-1">
                  <MemoStar />
                  <MemoStar />
                  <MemoStar />
                  <MemoStar />
                </div>
              </div>
            </div>
          </div>

          {/*  Testimonial 2  */}
          <div
            className="bg-[#144E43] rounded-lg shadow-md p-6 mb-4 sm:mb-0 sm:mr-4"
            style={{ flex: "1 1 auto" }}>
            <p className="h-40">
              As a student, I needed a banking solution that matched my
              on-the-go lifestyle. OAYPAY was a game-changer. I can check my
              account balance, pay my bills, and send money to friends
              instantly. It's hassle-free and perfect for my busy schedule.
            </p>
            <div className="bg-[#B7BFC733] w-full h-[0.1rem]" />
            <div className="mt-4 flex items-center">
              <img
                src={profile1}
                alt="Profile Picture"
                className="h-8 w-8 rounded-full mr-2"
              />
              <div>
                <p className="capitalize">noheem nysc</p>
                <div className="flex gap-1">
                  <MemoStar />
                  <MemoStar />
                  <MemoStar />
                  <MemoStar />
                </div>
              </div>
            </div>
          </div>

          {/*  Testimonial 3  */}
          <div
            className="bg-[#144E43] rounded-lg shadow-md p-6 mb-4 sm:mb-0 sm:mr-4"
            style={{ flex: "1 1 auto" }}>
            <p className="h-40">
              Running my small business was made easier with OAYPAY. Their
              zero-access banking allowed me to manage my company's finances
              online, even without a physical branch. It's efficient, secure,
              and tailored to my business needs.
            </p>
            <div className="bg-[#B7BFC733] w-full h-[0.1rem]" />
            <div className="mt-4 flex items-center">
              <img
                src={profile1}
                alt="Profile Picture"
                className="h-8 w-8 rounded-full mr-2"
              />
              <div>
                <p className="capitalize">noheem nysc</p>
                <div className="flex gap-1">
                  <MemoStar />
                  <MemoStar />
                  <MemoStar />
                  <MemoStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Testimonials;
