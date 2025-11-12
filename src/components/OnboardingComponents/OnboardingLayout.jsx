import React from "react";

const OnboardingLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#6b4bff] to-[#7a5bff] relative overflow-hidden flex flex-col items-center justify-start pb-12">

      {/* Top Left Corner */}
      <div className="absolute top-0 left-0 pointer-events-none z-10">
        <img
          src="/assets/images/onboarding/Top_Left_Corner.webp"
          alt="Top Left Corner"
          className="w-auto h-auto"
        />
      </div>

      {/* Top Right Corner */}
      <div className="absolute top-0 right-0 pointer-events-none z-10">
        <img
          src="/assets/images/onboarding/Top_Right_Corner.webp"
          alt="Top Right Corner"
          className="w-auto h-auto"
        />
      </div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-0 right-0 pointer-events-none z-10">
        <img
          src="/assets/images/onboarding/Bottom_Right_Corner.webp"
          alt="Bottom Right Corner"
          className="w-auto h-auto"
        />
      </div>

      {/* top logo */}
      <header className="w-full pt-8 flex justify-center z-20 relative">
        <div className="text-white font-semibold tracking-wide text-xl font-inter">firmly</div>
      </header>

      <main className="flex-1 w-full flex items-center justify-center px-6 z-20 relative">
        {children}
      </main>
    </div>
  );
};

export default OnboardingLayout;
