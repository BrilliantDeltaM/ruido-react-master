import React, { useState } from "react";
import Option from "./Option.jsx";

const OptionsHolder = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option); 
    onSelect(option); 
  };

  return (
    <div className="space-y-4">
      {options.map((option) => (
        <Option
          key={option.value}
          isSelected={selectedOption && selectedOption.value === option.value}
          onClick={() => handleSelect(option)} 
        >
          {option.label}
        </Option>
      ))}
    </div>
  );
};

export default OptionsHolder;
