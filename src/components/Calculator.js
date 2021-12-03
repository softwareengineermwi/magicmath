import React, { useState } from 'react';
import Output from './Output';
import Input from './Input';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState({ ...state, ...calculate(state, e.target.innerText) });
  };

  const { next, total } = state;

  return (
    <div className="grid container">
      <div className="col-6">
        <h3>Let`s do some math</h3>
      </div>
      <div className="col-6 grid container max-width-sm">
        <Output value={next || total || '0'} />
      <Input handler={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
