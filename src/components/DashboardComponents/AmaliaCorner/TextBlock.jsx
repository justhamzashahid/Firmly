import React from "react";

const TextBlock = ({ title, items, bgColor = "bg-[#F5F5FF]" }) => {
  return (
    <div className={`${bgColor} rounded-xl p-4  mb-4 md:mb-6`}>
      <h3 className="text-sm md:text-base  text-black mb-1 font-inter-regular">
        {title}
      </h3>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-sm md:text-base font-inter-regular text-black"
          >
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextBlock;
