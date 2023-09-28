import React, { useState } from 'react';

const Amount = ({ onChange }) => {
  const [euros, setEuros] = useState(0);

  const handleEuroChange = (e) => {
    const amount = e.target.value;
    setEuros(amount);
    onChange(amount);
  };

  return (
    <div>
      <label>Montant en euros : </label>
      <input type="number" value={euros} onChange={handleEuroChange} />
    </div>
  );
};

export default Amount;
