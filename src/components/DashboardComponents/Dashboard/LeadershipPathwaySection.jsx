import React from "react";
const LeadershipPathwaySection = () => {
  return (
    <>
      <section className="py-8 lg:py-12">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 font-cormorant">
            Leadership Pathway
          </h2>
          <p className="text-base text-[#3D3D3D]/60 font-inter">
            Your pathway to convert your Grow areas to Glow areas
          </p>
        </div>
        <div className="relative border border-[#0000000A] bg-gray-100 rounded-2xl p-6 overflow-hidden  lg:min-h-[250px] min-h-[150px]  flex items-center justify-center">
          <img
            src="/assets/images/dashboard/Actionsleft.webp"
            alt="dashboard top background"
            className="absolute bottom-0 left-0 lg:w-[500px] z-50 w-[120px] h-[120px] lg:h-[400px] object-cover object-top"
          />
          <div className="relative z-10 flex flex-col justify-center items-center text-center">
            <h3 className="text-xl lg:text-3xl font-bold text-[#3D3D3D] mb-1 font-cormorant">
              Action items{" "}
            </h3>
            <p className="lg:text-base text-xs text-[#3D3D3D]/60 font-inter max-w-xs mx-auto">
              Amalia will share action items with you for your personalized
              Leadership Pathway
            </p>
          </div>
          <img
            src="/assets/images/dashboard/ActionRight.webp"
            alt="dashboard top background"
            className="absolute top-0 right-0 lg:w-[500px] z-50 w-[120px] h-[120px] lg:h-[400px] object-cover object-top"
          />
        </div>
      </section>
    </>
  );
};
export default LeadershipPathwaySection;