import React from "react";

const NormalChatContent = () => {
  const suggestedTopics = Array(7).fill("sensitive topics");

  return (
    <div className="h-full flex items-center justify-center 2xl:pt-0 xl:pt-20 lg:pt-14 px-4 relative overflow-y-auto">
      {/* Central content block */}
      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Emoji icon */}
        <div className="flex justify-center mb-4">
          <img
            src="/assets/images/dashboard/emoji.png"
            alt="Normal Chat"
            className="lg:w-24 lg:h-24 h-14 w-14  object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-cormorant font-bold text-black mb-4">
          Normal Chat
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-[#3D3D3D]/60 font-inter font-medium mb-4 max-w-md mx-auto">
          Standard coaching conversation. Messages persist so you can revisit
          insights anytime.
        </p>

        {/* Ask about link */}
        <div className="mb-4">
          <button className="text-[#6664D3]  font-inter text-sm md:text-base transition-colors ">
            Ask about
          </button>
        </div>

        {/* Suggested topics buttons - 4 in top row, 3 in bottom row */}
        <div className="flex flex-col gap-2 md:gap-3 max-w-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {suggestedTopics.slice(0, 4).map((topic, index) => (
              <button
                key={index}
                className="px-3 md:px-4.5 py-2 md:py-3.5 bg-[#f5f5f5] text-[#3D3D3D]/60 rounded-xl font-inter font-medium  transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 md:justify-center md:mx-auto md:w-fit">
            {suggestedTopics.slice(4, 7).map((topic, index) => (
              <button
                key={index + 4}
                className="px-3 md:px-4.5 py-2 md:py-3.5 bg-[#F5F5F5] text-[#3D3D3D]/60 rounded-xl font-inter font-medium  transition-colors"
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

