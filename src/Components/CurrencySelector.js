import React, { useState } from 'react';

const CurrencySelector = ({ onChange }) => {
  const [conversionDirection, setConversionDirection] = useState('e2d');

  const handleConversionDirectionChange = (e) => {
    const direction = e.target.value;
    setConversionDirection(direction);
    onChange(direction);
  };

  return (
    <div>
      <label>Choisir la direction de la conversion :</label>
      <select value={conversionDirection} onChange={handleConversionDirectionChange}>
        <option value="e2d">Euro - Dollar</option>
        <option value="d2e">Dollar - Euro</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
