import React from "react";
import SummaryCard from "../AmaliaCorner/SummaryCard";

const GrowAndGlowSection = ({ hasVisitedAmaliaCorner = false }) => {

  const doingGreatItems = [
    { abbreviation: "GOA", label: "Goal Orientation", score: 96 },
    { abbreviation: "WOR", label: "Workplace Belonging", score: 89 },
    { abbreviation: "RES", label: "Resilience", score: 87 },
  ];

  const growthAreasItems = [
    { abbreviation: "EMP", label: "Empathy", score: 32 },
    { abbreviation: "ENG", label: "Engagement", score: 24 },
    { abbreviation: "SEL", label: "Self-belief", score: 22 },
  ];

  return (
    <section data-tour="grow-glow" className="py-8 lg:py-12">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 font-cormorant">
            Grow & Glow
          </h2>
          <p className="text-base text-[#3D3D3D]/60 font-inter">
            Get insights on where you shine and what needs to be improved
          </p>
        </div>
        {hasVisitedAmaliaCorner && (
          <button className="px-5 py-3 bg-[#3D3D3D] text-white rounded-xl font-medium transition-colors text-sm md:text-base hover:bg-[#2D2D2D] whitespace-nowrap">
            Improve Growth Areas
          </button>
        )}
      </div>
      {hasVisitedAmaliaCorner ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <SummaryCard
            title="Doing great"
            subtitle="Your female talent is thriving in the following domains."
            items={doingGreatItems}
            bgColor="bg-[#378C78]"
            iconImage="/assets/images/dashboard/doing.webp"
          />
          <SummaryCard
            title="Growth areas"
            subtitle="These areas need your immediate attention to balance workplace wellbeing."
            items={growthAreasItems}
            bgColor="bg-[#C56A55]"
            iconImage="/assets/images/dashboard/growth.webp"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div
            data-tour="doing-great"
            className="relative border border-[#0000000A] bg-gray-100 rounded-2xl p-6 overflow-hidden lg:min-h-[250px] min-h-[150px] flex items-center justify-center"
          >
            <img
              src="/assets/images/dashboard/DoingGreattop.webp"
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
              src="/assets/images/dashboard/DoingGreatbottom.webp"
              alt="dashboard top background"
              className="absolute bottom-0 left-0 lg:w-[216px] w-[100px] h-[100px]  z-50 lg:h-[201px] object-cover object-top"
            />
          </div>
          <div className="relative border border-[#0000000A] bg-gray-100 rounded-2xl p-6 overflow-hidden lg:min-h-[250px] min-h-[150px] flex items-center justify-center">
            <img
              src="/assets/images/dashboard/GrowthAreastop.webp"
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
              src="/assets/images/dashboard/GrowthAreasbottom.webp"
              alt="dashboard top background"
              className="absolute bottom-0 right-0 lg:w-[217px] z-50 w-[100px] h-[100px] lg:h-[156px] object-cover object-top"
            />
          </div>
        </div>
      )}
    </section>
  );
};
export default GrowAndGlowSection;
