import React, { useState } from 'react';

const ToneSelector = ({ getTone }) => {
  const [selectedTone, setSelectedTone] = useState('');

  const handleToneChange = (event) => {
    setSelectedTone(event.target.value);
    getTone(selectedTone);
  };

  return (
    <select
      value={selectedTone}
      onChange={handleToneChange}
      className=" text-black p-1 rounded"
    >
      <option value="Select...">Select a tone</option>
      <option value="professional">Professional</option>
      <option value="casual">Casual</option>
      <option value="friendly">Friendly</option>
    </select>
  );
};

export default ToneSelector;
