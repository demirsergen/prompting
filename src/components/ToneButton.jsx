import React, { useState, useContext } from 'react';
import { AppContext } from '../pages/index';

const ToneButton = ({ tone }) => {
  const [selected, setSelected] = useState(false);
  const style = 'p-1 bg-teal-100 text-black rounded';
  const activeStyle = 'p-1 bg-teal-600 text-white rounded';

  const { setSelectedTones } = useContext(AppContext);

  const handleClick = () => {
    setSelected((prev) => !prev);
    setSelectedTones((prevTones) => ({
      ...prevTones,
      [tone.toLowerCase()]: !prevTones[tone.toLowerCase()],
    }));
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
