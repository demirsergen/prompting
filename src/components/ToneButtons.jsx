import React, { useState } from 'react';
import ToneButton from './ToneButton';

const ToneButtons = () => {
  const [tone, setTone] = useState('');
  const [selectedTones, setSelectedTones] = useState({
    professional: false,
    casual: false,
    friendly: false,
  });

  const handleToneChange = (tone) => {
    alert(tone);
  };

  return (
    <div className="flex gap-2 mx-auto justify-center">
      <ToneButton tone="Professional" callback={handleToneChange} />
      <ToneButton tone="Casual" callback={handleToneChange} />
      <ToneButton tone="Friendly" callback={handleToneChange} />
    </div>
  );
};

export default ToneButtons;
