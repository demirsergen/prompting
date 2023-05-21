import React, { useState } from 'react';
import { targetAudienceOptions } from '../../targetAudiences';

const TargetSelector = ({ getTargetAudience }) => {
  const [selectedTarget, setSelectedTarget] = useState('');

  const handleChangeTarget = (e) => {
    const target = e.target.value;

    setSelectedTarget(target);
    getTargetAudience(target);
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
