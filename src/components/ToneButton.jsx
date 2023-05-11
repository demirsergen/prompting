import React from 'react';

const ToneButton = ({ tone, callback }) => {
  return <button onClick={() => callback(tone)}>{tone}</button>;
};

export default ToneButton;
