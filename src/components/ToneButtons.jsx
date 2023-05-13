import React, { useState } from 'react';
import ToneButton from './ToneButton';

const ToneButtons = () => {
  return (
    <div className="flex gap-2 mx-auto justify-center">
      <ToneButton tone="Casual" />
      <ToneButton tone="Professional" />
      <ToneButton tone="Friendly" />
    </div>
  );
};

export default ToneButtons;
