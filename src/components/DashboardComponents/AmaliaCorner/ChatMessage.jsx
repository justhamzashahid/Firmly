import React from "react";

const ChatMessage = ({ message }) => {
  return (
    <div className="mb-6 md:mb-8">
      <div className="bg-[#F5F5FF] rounded-lg p-4">
        <p className="text-sm md:text-base text-black font-inter leading-relaxed">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
