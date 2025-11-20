import React, { useState, useEffect, useRef } from "react";
import ChatInputFooter from "./ChatInputFooter";
import { useNavigate } from "react-router-dom";

const Session3Chat = ({ isSidebarCollapsed = true }) => {
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
    // Navigate to Dashboard and show Leadership Pathway section with session 4 active
    sessionStorage.setItem("hasVisitedAmaliaCorner", "true");
    sessionStorage.setItem("fromStartSession", "true");
    sessionStorage.setItem("fromSession3Next", "true");
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
          Welcome back! I'm thrilled to continue our journey together. In this
          session, we'll move from understanding and reflection to practical
          application. This is where you'll develop concrete tools and techniques
          that you can use immediately in your leadership practice.
        </>
      ),
      showResponse: false,
    },
    {
      id: 2,
      type: "amalia",
      content: "How have you been applying the reflective practices we discussed?",
      showResponse: false,
    },
    {
      id: 3,
      type: "user",
      content:
        "I've been trying to pause and consider different perspectives before responding. It's been challenging but really insightful!",
      showResponse: false,
    },
    {
      id: 4,
      type: "amalia",
      content: (
        <>
          That's excellent progress! Now let's build on that foundation with
          practical tools. The Empathy Toolkit consists of evidence-based
          techniques that research shows are effective for developing empathetic
          leadership skills.
          <br />

          <br />
          Today, we'll explore three key tools:
          <br />
          <br />
          <strong>1. Active Listening Framework:</strong> A structured approach to
          truly hearing and understanding others' perspectives, developed from
          Rogers' (1957) person-centered therapy principles and adapted for
          leadership contexts.
          <br />
          <br />
          <strong>2. Perspective-Taking Exercises:</strong> Practical techniques
          to systematically consider situations from multiple viewpoints, based on
          Galinsky and colleagues' (2008) research on perspective-taking and
          negotiation.
          <br />
          <br />
          <strong>3. Empathetic Response Strategies:</strong> Concrete methods
          for responding to others in ways that demonstrate understanding and
          connection, drawing from Goleman's (2006) work on emotional
          intelligence in leadership.
          <br />
          <br />
          These tools aren't just theoretical—they're practical techniques you
          can use in meetings, one-on-ones, and difficult conversations. We'll
          practice them together so you feel confident applying them in real
          situations.
          <br />
          <br />
          Are you ready to start with the Active Listening Framework?
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
          Wonderful! Remember, these tools become more powerful with practice. The
          more you use them, the more natural they'll become. In our final
          session, we'll focus on integrating all of these skills into your
          ongoing leadership practice.
          <br />
          <br />
          Before we meet again, I encourage you to try at least one of these
          tools in a real workplace situation. Notice what happens when you apply
          it.
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
            className="flex-1 px-5  py-3.5  bg-[#F5F5F5] max-w-fit text-[#578DDD] rounded-2xl font-medium transition-colors text-sm md:text-base hover:bg-[#E5E5E5]"
          >
            Next Session
          </button>
          <button
            onClick={handleGoToDashboard}
            className="flex-1   py-3.5 px-5  bg-[#3D3D3D] max-w-fit text-[#F5F5F5] rounded-2xl font-medium transition-colors text-sm md:text-base hover:bg-[#2D2D2D]"
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

export default Session3Chat;


