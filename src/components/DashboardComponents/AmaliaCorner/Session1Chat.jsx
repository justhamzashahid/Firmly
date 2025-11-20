import React, { useEffect, useRef } from "react";
import ChatInputFooter from "./ChatInputFooter";
import { useNavigate } from "react-router-dom";

const Session1Chat = ({ isSidebarCollapsed = true }) => {
  const navigate = useNavigate();
  const userResponses = {};
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleNextSession = () => {
    sessionStorage.setItem("hasVisitedAmaliaCorner", "true");
    sessionStorage.setItem("fromStartSession", "true");
    sessionStorage.setItem("fromNextSession", "true");
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
          Welcome! I'm Amalia, and I'm delighted to guide you through this
          empathy development journey. I appreciate your openness to discussing
          empathy and your interest in personal growth. Today, we'll explore
          what empathy means in the leadership context and why it's particularly
          valuable for women leaders.
        </>
      ),
      showResponse: false,
    },
    {
      id: 2,
      type: "amalia",
      content: "How are you feeling about developing this skill?",
      showResponse: false,
    },
    {
      id: 3,
      type: "user",
      content:
        "I'm pretty glad that I've started this session and I'm excited for the next one's too!",
      showResponse: false,
    },
    {
      id: 3,
      type: "amalia",
      content: (
        <>
          Welcome! I'm Amalia, and I'm delighted to guide you through this
          empathy development journey. I appreciate your openness to discussing
          empathy and your interest in personal growth. Today, we'll explore
          what empathy means in the leadership context and why it's particularly
          valuable for women leaders. How are you feeling about developing this
          skill?
          <br />
          <br />
          Thank you for sharing. Before we dive into the specifics, I want to
          acknowledge that seeking development in any area takes courage and
          self-awareness. The fact that you're here shows a commitment to your
          professional growth. Let's establish a shared understanding of what
          empathy truly means in leadership. Empathy is our ability to
          recognize, understand, and connect with others' emotions and
          perspectives. As Davis (1983) defines it, empathy includes
          perspective-taking—seeing situations from others' viewpoints—which is
          crucial for effective leadership.
          <br />
          <br />
          Empathy is not just about being nice—it's a strategic leadership
          competency that drives measurable results. According to Zak's (2017)
          research published in the Harvard Business Review, organizations with
          high-trust cultures—which empathetic leadership helps create—show
          measurable improvements in productivity and employee wellbeing. For
          women leaders specifically, empathy can be transformative in three key
          dimensions:
          <br />
          <br />
          <strong>1. Cognitive empathy:</strong> Understanding others' thought
          processes and perspectives
          <br />
          <strong>2. Emotional empathy:</strong> Sensing and appropriately
          responding to others' feelings
          <br />
          <strong>3. Compassionate empathy:</strong> Taking meaningful action
          based on empathic understanding The Catalyst (2021) research report on
          'The Power of Empathy in Times of Crisis and Beyond' found that
          empathy is strongly associated with positive workplace outcomes
          including innovation, engagement, and retention—factors that can be
          especially significant for women in leadership positions.
          <br />
          <br />
          Women who cultivate empathy as a leadership skill often develop more
          inclusive teams, foster greater innovation, and create psychologically
          safe environments where diverse perspectives thrive. Edmondson's
          (2018) research demonstrates that psychological safety—which
          empathetic leadership supports—is essential for team learning and
          innovation. This inclusive leadership approach leverages
          relationship-building strengths while addressing what Heilman and
          Okimoto (2007) identified as gender-based expectations that can create
          challenges for women leaders. The research is clear: empathy is a
          valuable leadership competency with tangible benefits. How does this
          perspective on empathy align with your own leadership experiences?"
        </>
      ),
      showResponse: true,
      responseId: "response1",
    },
    {
      id: 4,
      type: "amalia",
      content: (
        <>
          Those insights are valuable. As shown by Riess and colleagues (2012),
          empathy is indeed a skill that can be deliberately cultivated through
          structured training, not just a personality trait. For our next
          session, we'll explore how empathy manifests in your specific
          workplace dynamics and identify opportunities to leverage this skill.
          Before we meet again, I invite you to notice one or two situations
          where empathy (or its absence) affected a workplace interaction. Try
          to observe not just the words exchanged but the emotions behind them.
          We'll use these examples as powerful learning opportunities. Does that
          sound like a helpful approach?
        </>
      ),
      showResponse: true,
      responseId: "response2",
    },
    {
      id: 5,
      type: "amalia",
      content: (
        <>
          Excellent! I look forward to our next session. Remember, developing
          empathy isn't about changing who you fundamentally are—it's about
          expanding your leadership toolkit with skills that research shows are
          valuable for navigating complex workplace dynamics.
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
            className="flex-1 px-5  py-3.5  bg-[#F5F5F5]  text-[#578DDD] rounded-2xl font-medium transition-colors text-sm md:text-base hover:bg-[#E5E5E5]"
          >
            Next Session
          </button>
          <button
            onClick={handleGoToDashboard}
            className="flex-1   py-3.5 px-5  bg-[#3D3D3D] text-[#F5F5F5] rounded-2xl font-medium transition-colors text-sm md:text-base hover:bg-[#2D2D2D]"
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

export default Session1Chat;
