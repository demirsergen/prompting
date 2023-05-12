import React, { useState } from 'react';
import ToneButton from './ToneButton';

const ToneButtons = () => {
  const [tone, setTone] = useState('');

  const handleToneChange = (tone) => {
    alert(tone);
  };

  return (
    <div className="flex gap-2">
      <ToneButton tone="Professional" callback={handleToneChange} />
      <ToneButton tone="Casual" callback={handleToneChange} />
      <ToneButton tone="Friendly" callback={handleToneChange} />
    </div>
  );
};

export default ToneButtons;
