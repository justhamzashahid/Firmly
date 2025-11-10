import React from "react";

const ChatMessage = ({ message }) => {
  return (
    <div className="mb-6 md:mb-8">
      <div className="bg-gray-100 rounded-lg p-4 md:p-6 max-w-4xl">
        <p className="text-sm md:text-base text-gray-900 leading-relaxed">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;

