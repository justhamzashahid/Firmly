import React, { useEffect, useRef } from "react";
import ChatInputFooter from "./ChatInputFooter";
import { useNavigate } from "react-router-dom";

const Session2Chat = ({ isSidebarCollapsed = true }) => {
  const navigate = useNavigate();
  const userResponses = {};
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleNextSession = () => {
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
      id: 2,
      type: "user",
      content: "User response appears here",
      showResponse: false,
    },
    {
      id: 3,
      type: "amalia",
      content: (
        <>
          Let's explore the key components of the workbook together:
          <br />
          <strong>1. The Three Perspectives Exercise:</strong>
          <br />
          • Examine situations from your perspective, others' viewpoints, and a
          neutral observer's stance
          <br />
          • Document insights and patterns you discover
          <br />
          • Track how this practice influences your decision-making
          <br />
          This exercise draws on Todd and colleagues' (2011) research showing
          how perspective-taking exercises can help reduce bias and improve
          understanding across different groups.
          <br />
          <br />
          <strong>2. Active Listening Practice:</strong>
          <br />
          • Focus completely on what others are saying without planning your
          response
          <br />
          • Try to understand not just their words but the emotions behind them
          <br />
          • Practice identifying emotions through facial expressions, tone of
          voice, and body language
          <br />
          <br />
          <strong>3. Empathetic Curiosity Conversations:</strong>
          <br />
          • Structured question framework for understanding others' experiences
          <br />
          • Active listening techniques that demonstrate empathy while
          maintaining authority
          <br />
          • Conversation starters that build what Edmondson (2018) identified as
          psychological safety
          <br />
          <br />
          <strong>4. Empathy-Based Problem-Solving Framework:</strong>
          <br />
          • Step-by-step approach to using empathy in conflict resolution
          <br />
          • Techniques for balancing empathy with accountability
          <br />• Strategies for leveraging empathy in negotiation and influence
        </>
      ),
      showResponse: false,
    },
    {
      id: 4,
      type: "amalia",
      content: (
        <>
          Let's work through the 'Three Perspectives' technique together. When
          facing a workplace situation, you'll practice identifying three
          different perspectives:
          <br />
          1. Your own perspective
          <br />
          2. A colleague's perspective
          <br />
          3. A neutral observer's perspective
          <br />
          Think of a recent workplace interaction that didn't go as smoothly as
          you'd hoped. Let's apply this technique:
          <br />
          • From your perspective, what happened?
          <br />
          • Now, try to step into your colleague's shoes. What might they have
          been experiencing?
          <br />• Finally, if a neutral third party had observed this
          interaction, what might they have noticed?
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
          You've done excellent work with this exercise. I'll email you the
          complete downloadable worksheet after our session so you can continue
          practicing these techniques. I recommend spending 10-15 minutes once a
          week on this exercise. Businessolver's (2024) research on workplace
          empathy indicates that consistent practice of empathy skills
          contributes to improved workplace relationships and leadership
          effectiveness.
        </>
      ),
      showResponse: false,
    },
    {
      id: 6,
      type: "amalia",
      content: (
        <>
          For our final session, I'd like to discuss your experiences applying
          these tools and create a sustainable empathy development plan. Does
          that approach work for you?
        </>
      ),
      showResponse: true,
      responseId: "response2",
    },
    {
      id: 7,
      type: "amalia",
      content: (
        <>
          Wonderful! I'll send the workbook today, and I look forward to our
          final session where we'll reflect on your progress and insights.
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
        <div className="flex lg:flex-row flex-col gap-4 lg:max-w-sm lg:mx-auto mt-8 mb-4">
          <button
            onClick={handleNextSession}
            className="flex-1 px-5  py-3.5 lg:max-w-fit  bg-[#F5F5F5]  text-[#578DDD] rounded-2xl font-medium transition-colors text-sm md:text-base hover:bg-[#E5E5E5]"
          >
            Next Session
          </button>
          <button
            onClick={handleGoToDashboard}
            className="flex-1   py-3.5 px-5 lg:max-w-fit  bg-[#3D3D3D] text-[#F5F5F5] rounded-2xl font-medium transition-colors text-sm md:text-base hover:bg-[#2D2D2D]"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
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
