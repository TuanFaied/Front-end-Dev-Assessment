import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const colorClass = accordionOpen ? "text-PrimaryColor" : "text-black";

  return (
    <div className="p-6 bg-bg mb-[15px]">
      <button
        onClick={toggleAccordion}
        className="flex justify-between w-full items-center" 
      >
        
        <span className={`text-tx7 ${colorClass}`}>{title}</span>
        
        <svg
          className={`shrink-0 ml-8 ${colorClass}`} 
          width="14"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          
          <rect
            y="7"
            width="14"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen ? "!rotate-180" : ""
            }`}
          />
          
          <rect
            y="7"
            width="14"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen ? "!rotate-180" : ""
            }`}
          />
        </svg>
      </button>

      
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-tx9">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
