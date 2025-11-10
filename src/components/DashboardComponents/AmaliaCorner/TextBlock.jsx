import React from "react";

const TextBlock = ({ title, items, bgColor = "bg-purple-50" }) => {
  return (
    <div className={`${bgColor} rounded-lg p-4 md:p-6 mb-4 md:mb-6`}>
      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
        {title}
      </h3>
      <ul className="space-y-2 md:space-y-3">
        {items.map((item, index) => (
          <li key={index} className="text-sm md:text-base text-gray-800">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextBlock;

