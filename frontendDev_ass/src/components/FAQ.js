import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4  rounded-lg">
      <Accordion 
        title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
        answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
      />
      <Accordion
        title="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
        answer="hi"
      />
      <Accordion title="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?" 
      answer="hi...." />
    </div>
  );
};

export default FAQ;