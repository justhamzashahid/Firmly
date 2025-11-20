import React, { useState, useEffect, useRef } from "react";
import ChatInputFooter from "./ChatInputFooter";
import { useNavigate } from "react-router-dom";

const Session2Chat = ({ isSidebarCollapsed = true }) => {
  const navigate = useNavigate();
  const [userResponses, setUserResponses] = useState({});
  const [userMessages, setUserMessages] = useState([]);
  const [messageIdCounter, setMessageIdCounter] = useState(10);
  const messagesEndRef = useRef(null);

  const handleUserResponse = (messageId, response) => {
    setUserResponses((prev) => ({
      ...prev,
      [messageId]: response,
    }));
  };

  const handleSendMessage = (messageText) => {
    if (messageText.trim()) {
      const newMessage = {
        id: messageIdCounter,
        type: "user",
        content: messageText.trim(),
        showResponse: false,
      };
      setUserMessages((prev) => [...prev, newMessage]);
      setMessageIdCounter((prev) => prev + 1);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [userMessages]);

  const handleNextSession = () => {
    // Navigate to Dashboard and show Leadership Pathway section with session 3 active
    sessionStorage.setItem("hasVisitedAmaliaCorner", "true");
    sessionStorage.setItem("fromStartSession", "true");
    sessionStorage.setItem("fromSession2Next", "true");
    navigate("/dashboard");
  };

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  const messages = [
    {
      id: 1,
      type: "amalia",
      content: (
        <>
          Welcome to our third session! Today I'm excited to introduce your
          Empathy Leadership Workbook, which contains research-backed exercises
          designed specifically for women in leadership positions. Before we
          discuss specific strategies to develop your empathy skills, I want to
          emphasize that empathy is a skill that can be developed with
          practice—it's not a fixed trait. Research by Riess and colleagues
          (2012) demonstrated that empathy can be effectively taught through
          structured interventions.
        </>
      ),
      showResponse: false,
    },
    {
      id: 3,
      type: "user",
      content:
        "User response appears here",
      showResponse: false,
    },
    {
      id: 4,
      type: "amalia",
      content: (
        <>
          That's wonderful! Your observations are the foundation of reflective
          practice. Reflective practice in empathy means taking time to examine
          workplace interactions—both your own and others'—through an empathetic
          lens. It's about asking: "What emotions were present? What
          perspectives might I have missed? How could empathy have changed the
          outcome?"
          <br />
          <br />
          Research by Schön (1983) shows that reflective practice helps leaders
          develop what he called "reflection-in-action"—the ability to think
          empathetically in real-time during interactions. For women leaders,
          this skill is particularly valuable because it allows you to navigate
          complex social dynamics while maintaining authenticity.
          <br />
          <br />
          Today, we'll work through a structured reflection process. I'll guide
          you through analyzing a workplace scenario, identifying the emotional
          dimensions, and exploring how different empathetic responses might
          have led to different outcomes. This isn't about finding "right"
          answers—it's about expanding your empathetic awareness and response
          options.
          <br />
          <br />
          Are you ready to dive into a specific scenario?
        </>
      ),
      showResponse: true,
      responseId: "response1",
    },
    {
      id: 5,
      type: "amalia",
      content: (
        <>
          Excellent! Remember, reflective practice is a skill that strengthens
          with use. The more you practice seeing situations through an
          empathetic lens, the more naturally it will come to you in real-time
          interactions. In our next session, we'll build on this foundation by
          exploring practical empathy tools you can use in your daily
          leadership.
          <br />
          <br />
          Before we meet again, I encourage you to practice this reflection
          process with one more real situation from your week. Notice what you
          discover.
        </>
      ),
      showResponse: false,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto w-full px-4 pb-32 max-w-5xl mx-auto">
        {messages.map((message) => (
          <div key={message.id} className="mb-6">
            {message.type === "amalia" ? (
              <div className="bg-[#F5F5FF] rounded-lg p-4">
                <p className="text-sm md:text-base text-black font-inter leading-relaxed">
                  {message.content}
                </p>
              </div>
            ) : (
              <div className="bg-[#f5f5f5] rounded-lg p-4 ml-auto max-w-fit">
                <p className="text-sm md:text-base text-black font-inter leading-relaxed">
                  {message.content}
                </p>
              </div>
            )}

            {message.showResponse && !userResponses[message.responseId] && (
              <div className="mt-4 bg-[#f5f5f5] rounded-lg p-4 ml-auto max-w-fit">
                <p className="text-sm md:text-base text-black font-inter leading-relaxed">
                  User response appears here
                </p>
              </div>
            )}

            {message.showResponse && userResponses[message.responseId] && (
              <div className="mt-4 bg-[#3D3D3D] rounded-lg p-4 ml-auto max-w-[85%]">
                <p className="text-sm md:text-base text-white font-inter leading-relaxed">
                  {userResponses[message.responseId]}
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Bottom Navigation Buttons */}
        <div className="flex lg:flex-row flex-col gap-4 lg:max-w-sm lg:mx-auto mt-8 mb-4">
          <button
            onClick={handleNextSession}
            className="flex-1 px-5  py-3.5 max-w-fit  bg-[#F5F5F5]  text-[#578DDD] rounded-2xl font-medium transition-colors text-sm md:text-base hover:bg-[#E5E5E5]"
          >
            Next Session
          </button>
          <button
            onClick={handleGoToDashboard}
            className="flex-1   py-3.5 px-5 max-w-fit  bg-[#3D3D3D] text-[#F5F5F5] rounded-2xl font-medium transition-colors text-sm md:text-base hover:bg-[#2D2D2D]"
          >
            Go to Dashboard
          </button>
        </div>
      </div>

      {/* Chat Input Footer */}
      <div
        className={`absolute bottom-0 left-0 right-0 ${
          isSidebarCollapsed ? "z-50" : ""
        } md:z-50`}
      >
        <ChatInputFooter />
      </div>
    </div>
  );
};

export default Session2Chat;
