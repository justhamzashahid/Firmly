import React from "react";

const NormalChatContent = () => {
  const suggestedTopics = Array(7).fill("sensitive topics");

  return (
    <div className="h-full flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background decorative images */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/images/dashboard/normaltop.png"
          alt=""
          className="absolute top-0 left-0 w-full h-auto opacity-10"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        <img
          src="/assets/images/dashboard/normalbottom.png"
          alt=""
          className="absolute bottom-0 left-0 w-full h-auto opacity-10"
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        />
      </div>

      {/* Central content block */}
      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Emoji icon */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/images/dashboard/emoji.png"
            alt="Normal Chat"
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-semibold text-black mb-4 md:mb-6">
          Normal Chat
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-[#3D3D3D]/70 font-inter mb-4 md:mb-6 max-w-xl mx-auto leading-relaxed">
          Standard coaching conversation. Messages persist so you can revisit
          insights anytime.
        </p>

        {/* Ask about link */}
        <div className="mb-6">
          <button className="text-[#578DDD] hover:text-[#4a7bc8] font-inter text-sm md:text-base transition-colors underline">
            Ask about
          </button>
        </div>

        {/* Suggested topics buttons - 4 in top row, 3 in bottom row */}
        <div className="flex flex-col gap-2 md:gap-3 max-w-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {suggestedTopics.slice(0, 4).map((topic, index) => (
              <button
                key={index}
                className="px-3 md:px-4 py-2 md:py-3 bg-[#F5F5F5] text-[#3D3D3D] rounded-lg font-inter text-xs md:text-sm hover:bg-[#E5E5E5] transition-colors border border-[#ECECEC]"
              >
                {topic}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 md:justify-center md:mx-auto md:w-fit">
            {suggestedTopics.slice(4, 7).map((topic, index) => (
              <button
                key={index + 4}
                className="px-3 md:px-4 py-2 md:py-3 bg-[#F5F5F5] text-[#3D3D3D] rounded-lg font-inter text-xs md:text-sm hover:bg-[#E5E5E5] transition-colors border border-[#ECECEC]"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalChatContent;

