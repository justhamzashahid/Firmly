import React from "react";
import ProgressBar from "./ProgressBar";
const ProgressBarsSection = () => {
  const progressData = [
    {
      label: "Goal Orientation",
      score: 89,
      color: "green",
      vectorPosition: 69,
    },
    {
      label: "Workplace Belonging",
      score: 82,
      color: "blue",
      vectorPosition: 71,
    },
    { label: "Engagement", score: 48, color: "purple", vectorPosition: 73 },
    { label: "Resilience", score: 79, color: "pink", vectorPosition: 70 },
    { label: "Self-Belief", score: 52, color: "orange", vectorPosition: 72 },
    { label: "Empathy", score: 44, color: "lightBlue", vectorPosition: 74 },
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
          initialVectorPosition={item.vectorPosition}
        />
      ))}
    </div>
  );
};
export default ProgressBarsSection;