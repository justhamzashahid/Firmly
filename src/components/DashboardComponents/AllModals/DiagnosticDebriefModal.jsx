import React, { useEffect, useRef } from "react";

const DiagnosticDebriefModal = ({ isOpen, onClose, onGetDebrief }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleGetDebrief = () => {
    if (onGetDebrief) {
      onGetDebrief();
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 z-[299] backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
        <div
          ref={modalRef}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-gray-200 p-6 sm:p-8 relative"
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#6664D3] rounded-full flex items-center justify-center relative">
              <div className="relative">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 sm:w-14 sm:h-14"
                >
                  {/* Speech bubble */}
                  <path
                    d="M24 8C16.27 8 10 13.27 10 21C10 25.5 12.14 29.5 15.5 32L14 38L20.5 36.5C22.16 36.83 23.87 37 25.5 37C33.23 37 39.5 31.73 39.5 24C39.5 16.27 33.23 10.5 25.5 10.5C24.87 10.5 24.25 10.55 23.65 10.65C22.85 8.95 21.5 7.5 20 6.5C21.33 7.17 22.65 8 24 8Z"
                    fill="#8A7BBF"
                    fillOpacity="0.8"
                  />
                  {/* Dots */}
                  <circle cx="20" cy="22" r="2" fill="white" />
                  <circle cx="24" cy="22" r="2" fill="white" />
                  <circle cx="28" cy="22" r="2" fill="white" />
                  {/* Star/gear embellishment */}
                  <path
                    d="M32 14L33.5 16.5L36 15.5L35 18L37.5 19.5L34.5 20L33.5 22.5L32 20L30.5 22.5L29.5 20L26.5 19.5L29 18L28 15.5L30.5 16.5L32 14Z"
                    fill="#8A7BBF"
                    fillOpacity="0.6"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 text-center font-cormorant">
            Get Your Diagnostic Debrief with Amalia
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 mb-6 text-center font-inter leading-relaxed">
            Amalia can help you understand your results and provide personalized
            insights.
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <button
              onClick={handleGetDebrief}
              className="bg-[#3D3D3D] hover:bg-[#2D2D2D] active:bg-[#1D1D1D] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 font-inter text-sm sm:text-base shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Get Debrief
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnosticDebriefModal;

