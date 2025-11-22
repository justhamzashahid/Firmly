import React, { useState } from "react";
import OnboardingLayout from "./OnboardingLayout";
import ResetPasswordModal from "./ResetPasswordModal";

const EmailSentModal = ({ isOpen, onClose }) => {
  const [showResetPassword, setShowResetPassword] = useState(false);

  if (!isOpen) return null;

  // Show reset password screen if forward arrow was clicked
  if (showResetPassword) {
    return (
      <ResetPasswordModal
        isOpen={true}
        onClose={() => {
          setShowResetPassword(false);
          onClose();
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50">
      <OnboardingLayout>
        <div className="w-full h-full flex items-center justify-center px-6">
          {/* Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 w-full max-w-md relative">
            {/* Back button inside card */}
            <button
              onClick={onClose}
              className="absolute top--1 left-0 w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors z-30"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <h2 className="text-white text-2xl font-semibold font-cormorant mb-3 text-left">
              Check your email.
            </h2>

            <p className="text-white/80 text-sm font-inter mb-6 leading-relaxed text-left">
              We sent you a link to reset your password. Always check your spam
              folder.
            </p>

            <div className="text-left">
              <p className="text-white/70 text-sm font-inter">
                Didn't receive anything?{" "}
                <button
                  className="text-white underline hover:text-white/80 transition-colors"
                  onClick={() => {
                    // Handle resend logic here
                    console.log("Resending email...");
                  }}
                >
                  Resend link
                </button>
              </p>
            </div>

            {/* Forward arrow button at bottom right */}
            <button
              onClick={() => setShowResetPassword(true)}
              className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors z-30"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </OnboardingLayout>
    </div>
  );
};

export default EmailSentModal;
