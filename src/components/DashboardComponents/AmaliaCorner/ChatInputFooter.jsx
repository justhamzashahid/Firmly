import React, { useState } from "react";

const ChatInputFooter = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      // Handle send message logic here
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className=" bg-white p-4 ">
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-end md:items-center">
        {/* Input Field */}
        <input
          type="text"
          placeholder="Type your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 w-full px-4 py-2 md:py-3 bg-[#F5F5F5] text-[#9E9CAE] rounded-xl border border-[#ECECEC] focus:outline-none  focus:ring-[1px] focus:ring-purple-500 font-inter-medium text-sm md:text-base"
        />

        {/* Action Buttons */}
        <div className="flex gap-2 md:gap-3 w-full md:w-auto">
          {/* Microphone Button */}
          <button
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#6664D3] text-white flex items-center justify-center transition-colors"
            aria-label="Voice input"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </button>

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="px-4 md:px-6 py-2 md:py-3 bg-[#3D3D3D] text-[#F5F5F5] rounded-xl font-medium transition-colors text-sm md:text-base"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInputFooter;
