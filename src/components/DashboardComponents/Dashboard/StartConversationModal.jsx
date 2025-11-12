import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const StartConversationModal = ({ isOpen, onClose, onStartChat }) => {
  const navigate = useNavigate();
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

  const handleNormalChat = () => {
    if (onStartChat) {
      onStartChat("normal");
    } else {
      navigate("/amalia-corner");
    }
    onClose();
  };

  const handleSafeSpaceChat = () => {
    if (onStartChat) {
      onStartChat("safe-space");
    } else {
      navigate("/amalia-corner");
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[299] backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
        <div
          ref={modalRef}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#6664D3] px-6 sm:px-8 py-6  relative overflow-hidden">
            {/* Background pattern */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{
                backgroundImage: "url(/assets/images/dashboard/conbg.png)",
              }}
            ></div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-cormorant font-bold text-[#FFFFFF] mb-1">
                Start a Conversation
              </h2>
              <p className="text-sm sm:text-base text-[#FFFFFF]/60 font-inter font-medium">
                Choose how you'd like to chat with Amalia.
              </p>
            </div>
          </div>

          {/* Body with two cards */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Normal Chat Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Card background pattern */}
                <div
                  className="absolute top-0 left-0 right-0 h-24 bg-cover bg-center bg-no-repeat opacity-10"
                  style={{
                    backgroundImage: "url(/assets/images/dashboard/conbg.png)",
                  }}
                ></div>

                {/* Gear icon */}
                <div className="absolute top-4 right-4">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <div className="relative z-10 mt-8">
                  <h3 className="text-xl font-bold text-[#3D3D3D] mb-3">
                    Normal Chat
                  </h3>
                  <p className="text-sm sm:text-base text-[#3D3D3D]/70 mb-4 leading-relaxed">
                    Standard coaching conversation. Messages persist so you can
                    revisit insights anytime.
                  </p>
                  <p className="text-xs sm:text-sm text-[#3D3D3D]/60 mb-6">
                    History saved to your session.
                  </p>
                  <button
                    onClick={handleNormalChat}
                    className="w-full py-3 bg-[#6664D3] text-white rounded-xl font-medium hover:bg-[#5553C2] transition-colors text-sm sm:text-base"
                  >
                    Start Chat
                  </button>
                </div>
              </div>

              {/* Safe Space Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Card background pattern */}
                <div
                  className="absolute top-0 left-0 right-0 h-24 bg-cover bg-center bg-no-repeat opacity-10"
                  style={{
                    backgroundImage: "url(/assets/images/dashboard/conbg.png)",
                  }}
                ></div>

                {/* Gear icon */}
                <div className="absolute top-4 right-4">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <div className="relative z-10 mt-8">
                  <h3 className="text-xl font-bold text-[#3D3D3D] mb-3">
                    Safe Space (Incognito mode)
                  </h3>
                  <p className="text-sm sm:text-base text-[#3D3D3D]/70 mb-4 leading-relaxed">
                    Incognito mode for sensitive topics. A darker theme with
                    clear privacy indicators.
                  </p>
                  <p className="text-xs sm:text-sm text-[#3D3D3D]/60 mb-6">
                    No history will be saved.
                  </p>
                  <button
                    onClick={handleSafeSpaceChat}
                    className="w-full py-3 bg-[#6664D3] text-white rounded-xl font-medium hover:bg-[#5553C2] transition-colors text-sm sm:text-base"
                  >
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartConversationModal;
