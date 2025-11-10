import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarsSection = () => {
  const progressData = [
    { label: "Goal Orientation", score: 89, color: "green" },
    { label: "Workplace Belonging", score: 82, color: "blue" },
    { label: "Engagement", score: 48, color: "purple" },
    { label: "Resilience", score: 79, color: "pink" },
    { label: "Self-Belief", score: 52, color: "orange" },
    { label: "Empathy", score: 44, color: "lightBlue" },
  ];

  return (
    <div className="mb-6 md:mb-8">
      {progressData.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.label}
          yourScore={item.score}
          peersScore={67}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default ProgressBarsSection;

