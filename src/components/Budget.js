import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, setBudget } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(budget);
  const limit = 20000;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    const newBudget = parseInt(inputValue);
    if (!isNaN(newBudget)) {
      if (newBudget > limit) {
        alert('The value cannot exceed remaining funds  £');
      } else {
        setBudget(newBudget);
      }
    } else {
      setInputValue(budget);
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: £</span>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        step={10}
      />
    </div>
  );
};

export default Budget;
