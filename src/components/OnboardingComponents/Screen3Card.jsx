import React from "react";

const Screen3Card = ({ onPrevious, onNext }) => {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 overflow-hidden">
      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 text-center drop-shadow-lg max-w-2xl w-full">
        <div className="flex flex-col items-center gap-5">
          {/* Screen3 Image */}
          <div className="w-full max-w-xs md:max-w-sm">
            <img
              src="/assets/images/onboarding/Screen3_Pic.webp"
              alt="Quick Chat with Amalia"
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>

          {/* Header Section */}
          <div className="w-full">
            <h1 className="text-white text-2xl md:text-3xl font-bold mb-3 font-cormorant leading-tight">
              Quick 1:1 Chat with Amalia™
            </h1>
            <p className="text-white/90 text-sm md:text-base w-full font-inter leading-relaxed">
              Amalia supports you with guided conversations that fit your needs. Switch seamlessly between Normal Chat for coaching or Safe Space (Incognito Mode) when you're ready to open up and reflect.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-3 w-full mt-4">
            <button
              onClick={onPrevious}
              className="px-6 py-2 bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors font-inter text-sm"
            >
              Previous
            </button>
            <button
              onClick={onNext}
              className="px-6 py-2 bg-white text-[#6b4bff] font-medium rounded-full shadow-sm hover:bg-white/90 transition-colors font-inter text-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen3Card;
