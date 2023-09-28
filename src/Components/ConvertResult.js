import React from 'react';

const ConvertResult = ({ amount, mode }) => {
  const commissionRate = 0.04; // Taux de commission de la banque
  const commissionMinimum = 5; // Commission minimale en euros

  const calculateConvertedAmount = () => {
    const numericAmount = parseFloat(amount); // Convertir amount en nombre
    if (!isNaN(numericAmount)) { // Vérifier si numericAmount est un nombre valide
      if (mode === 'e2d') {
        const commission = Math.max(numericAmount * commissionRate, commissionMinimum);
        return (numericAmount - commission).toFixed(2) + ' $';
      } else if (mode === 'd2e') {
        const commission = Math.max(numericAmount * commissionRate, commissionMinimum);
        return (numericAmount + commission).toFixed(2) + ' €';
      }
    }
    return 'Mode de conversion invalide';
  };

  return (
    <div>
      <p>Montant converti (après commission) : {calculateConvertedAmount()}</p>
    </div>
  );
};

export default ConvertResult;
