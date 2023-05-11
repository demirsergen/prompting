import React, { useState } from 'react';
import ToneButton from './ToneButton';

const ToneButtons = () => {
  const [tone, setTone] = useState('');

  return (
    <div>
      <ToneButton tone={'Professional'} callback={setTone} />
      <ToneButton tone={'Casual'} callback={setTone} />
      <ToneButton tone={'Friendly'} callback={setTone} />
    </div>
  );
};

export default ToneButtons;
