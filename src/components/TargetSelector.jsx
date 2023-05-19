import React, { useState } from 'react';
import { targetAudienceOptions } from '../../targetAudiences';

const TargetSelector = () => {
  const [selectedTarget, setSelectedTarget] = useState('');

  const handleChangeTarget = (e) => {
    setSelectedTarget(e.target.value);
  };
  return (
    <select
      onChange={handleChangeTarget}
      value={selectedTarget}
      className="text-black"
    >
      <option value="" defaultValue>
        Select a target audience
      </option>
      {targetAudienceOptions.map((audience, i) => (
        // console.log(audience);
        <option key={i} value={audience.name}>
          {audience.name}
        </option>
      ))}
    </select>
  );
};

export default TargetSelector;
