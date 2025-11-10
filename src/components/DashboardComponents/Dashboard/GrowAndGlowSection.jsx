import React from "react";

const GrowAndGlowSection = () => {
  return (
    <section  className="py-8 lg:py-12">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 font-cormorant">
          Grow & Glow
        </h2>
        <p className="text-base  text-[#3D3D3D]/60 font-inter">
          Get insights on where you shine and what needs to be improved
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Doing Great Card */}
        <div className="relative border border-[#0000000A] bg-gray-100 rounded-2xl p-6 overflow-hidden lg:min-h-[250px] min-h-[150px] flex items-center justify-center">
          {/* Background Pattern Overlay */}
          <img
            src="/assets/images/dashboard/DoingGreattop.png"
            alt="dashboard top background"
            className="absolute top-0 right-0 lg:w-[216px] w-[100px] h-[100px]  z-50 lg:h-[201px] object-cover object-top"
          />

          <div className="relative z-10 flex flex-col justify-center items-center text-center">
            <h3 className="text-xl lg:text-3xl font-bold text-[#3D3D3D] mb-1 font-cormorant">
              Doing Great
            </h3>
            <p className="lg:text-base text-xs text-[#3D3D3D]/60 font-inter">
              These are the domains you're thriving in
            </p>
          </div>
          <img
            src="/assets/images/dashboard/DoingGreatbottom.png"
            alt="dashboard top background"
            className="absolute bottom-0 left-0 lg:w-[216px] w-[100px] h-[100px]  z-50 lg:h-[201px] object-cover object-top"
          />
        </div>

        {/* Growth Areas Card */}
        <div className="relative border border-[#0000000A] bg-gray-100 rounded-2xl p-6 overflow-hidden lg:min-h-[250px] min-h-[150px] flex items-center justify-center">
          {/* Background Pattern Overlay */}
          <img
            src="/assets/images/dashboard/GrowthAreastop.png"
            alt="dashboard top background"
            className="absolute top-0 left-0 lg:w-[166px] z-50 w-[100px] h-[100px] lg:h-[134px] object-cover object-top"
          />

          <div className="relative z-10 flex flex-col justify-center items-center text-center">
            <h3 className="text-xl lg:text-3xl font-bold text-[#3D3D3D] mb-1 font-cormorant">
              Growth Areas
            </h3>
            <p className="lg:text-base text-xs text-[#3D3D3D]/60 font-inter">
              These areas need your attention for wellbeing
            </p>
          </div>
          <img
            src="/assets/images/dashboard/GrowthAreasbottom.png"
            alt="dashboard top background"
            className="absolute bottom-0 right-0 lg:w-[217px] z-50 w-[100px] h-[100px] lg:h-[156px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default GrowAndGlowSection;
