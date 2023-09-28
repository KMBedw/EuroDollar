import React, { useState } from 'react';
import CurrencySelector from './CurrencySelector';
import Amount from './Amount';
import ConvertResult from './ConvertResult';

const CurrencyConverter = () => {
  const [conversionDirection, setConversionDirection] = useState('e2d');
  const [euros, setEuros] = useState(0);

  const handleConversionDirectionChange = (direction) => {
    setConversionDirection(direction);
  };

  const handleEuroChange = (amount) => {
    setEuros(amount);
  };

  return (
    <div>
      <h1>Convertisseur Euro/Dollar</h1>
      <CurrencySelector onChange={handleConversionDirectionChange} />
      <Amount onChange={handleEuroChange} />
      <ConvertResult amount={euros} mode={conversionDirection} />
    </div>
  );
};

export default CurrencyConverter;
