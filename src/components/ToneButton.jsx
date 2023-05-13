import React, { useState } from 'react';

const ToneButton = ({ tone }) => {
  const [selected, setSelected] = useState(false);
  const style = 'p-1 bg-teal-100 text-black rounded';
  const activeStyle = 'p-1 bg-teal-600 text-white rounded';

  const handleClick = () => {
    setSelected((prev) => !prev);
    // get function from context to update state
  };

  return (
    <button
      className={selected ? activeStyle : style}
      onClick={handleClick}
      selected={selected}
    >
      {tone}
    </button>
  );
};

export default ToneButton;
