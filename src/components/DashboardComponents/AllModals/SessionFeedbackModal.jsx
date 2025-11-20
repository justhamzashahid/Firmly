import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SessionFeedbackModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();

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

  const handleContinue = () => {
    onClose();
    navigate("/dashboard/feedback");
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-[299] backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 overflow-y-auto">
        <div ref={modalRef} className="relative w-full max-w-2xl">
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center">
            <div className="text-center mb-4">
              <h2 className="text-3xl sm:text-4xl font-cormorant font-bold text-black leading-tight">
                Session Feedback
              </h2>
            </div>
            <div className="text-center mb-6">
              <p className="text-base sm:text-lg text-[#666666] max-w-xl mx-auto font-inter leading-relaxed">
                Now that we've wrapped up our session, take a moment to reflect
                on what you've learned today.
              </p>
            </div>
            <div className="flex justify-center w-full">
              <button
                onClick={handleContinue}
                className="w-full sm:w-auto px-8 py-3.5 max-w-fit bg-[#3D3D3D] text-white rounded-2xl font-inter font-medium text-base transition-colors hover:bg-[#2D2D2D] active:scale-95"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionFeedbackModal;