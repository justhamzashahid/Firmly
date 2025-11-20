import React, { useState, useEffect, useRef } from "react";
import ChatInputFooter from "./ChatInputFooter";
import { useNavigate } from "react-router-dom";

const Session4Chat = ({ isSidebarCollapsed = true }) => {
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

  const handleShareFeedback = () => {
    navigate("/dashboard/feedback");
  };

  const messages = [
    {
      id: 1,
      type: "amalia",
      content: (
        <>
          Welcome to our final session! Before we dive in, I want to thank you
          for your engagement throughout this program. Developing empathy is an
          ongoing journey, and the awareness and commitment you've shown are
          significant steps. How are you feeling about our work together so far?
        </>
      ),
      showResponse: true,
      responseId: "response1",
    },
    {
      id: 2,
      type: "amalia",
      content:
        "I'm excited to hear about your experiences working with the Empathy Leadership Workbook. What insights or challenges have emerged during your practice?",
      showResponse: true,
      responseId: "response2",
    },
    {
      id: 3,
      type: "amalia",
      content: (
        <>
          Thank you for sharing those experiences. Your observations about
          [specific feedback] align with what research shows about empathy
          development. Hojat and colleagues (2013) demonstrated in their
          longitudinal study that empathy develops through consistent practice and
          reflection—exactly the approach you're taking. Based on your
          experiences, let's identify:
          1. Where you've seen the most significant growth
          <br />
          2. Where you're encountering challenges
          <br />
          3. Which techniques are most effective for your leadership style
          The McKinsey & Company and LeanIn.Org (2023) Women in the Workplace
          report shows that women leaders who focus on people development and
          empathetic approaches contribute significantly to team satisfaction and
          retention.
        </>
      ),
      showResponse: true,
      responseId: "response3",
    },
    {
      id: 4,
      type: "amalia",
      content: (
        <>
          Those are valuable insights. Now, let's create your sustainable empathy
          development plan:
          1. <strong>Daily Practice:</strong> A 5-minute empathy reflection to
          incorporate into your routine
          <br />
          2. <strong>Weekly Application:</strong> One specific situation where
          you'll deliberately apply an empathy technique
          <br />
          3. <strong>Monthly Assessment:</strong> A structured check-in process
          with me to track your progress
          <br />
          4. <strong>Resources:</strong> Additional research-backed resources
          tailored to your specific challenges
          Gallup's (2023) State of the Global Workplace research highlights that
          leadership approaches that prioritize understanding employee needs and
          perspectives contribute to better organizational outcomes. The most
          successful women leaders make empathy development an ongoing practice
          rather than a one-time skill acquisition.
          Before we wrap up, what's one insight from our conversations that you
          found most valuable?
        </>
      ),
      showResponse: true,
      responseId: "response4",
    },
    {
      id: 5,
      type: "amalia",
      content: (
        <>
          I'm so impressed with your commitment to developing empathetic
          leadership. You've made remarkable progress in recognizing how empathy
          can be a strategic advantage rather than just an interpersonal nicety.
          The empathy skills you're cultivating will not only enhance your
          effectiveness as a leader but also contribute to creating more
          inclusive and innovative workplace cultures—something Woolley and
          colleagues (2010) observed in their research on collective intelligence
          in diverse teams.
          <br />
          I wish you continued success and growth on your leadership journey!
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
        <div className="flex lg:flex-row flex-col gap-4 max-w-fit mx-auto mt-8 mb-4">
          <button
            onClick={handleShareFeedback}
            className="flex-1   py-3.5 px-5  bg-[#3D3D3D] text-[#F5F5F5] rounded-2xl font-medium transition-colors text-sm md:text-base hover:bg-[#2D2D2D]"
          >
            Share Feedback
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

export default Session4Chat;


