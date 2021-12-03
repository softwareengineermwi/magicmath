import React, { useState } from 'react';
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
    <div className="grid container" data-testid="mycalc">
      <div className="col-6">
        <h3>Let`s do some math</h3>
      </div>

      <div className="col-6 grid container max-width-sm">
        <div className="col-12 bg-contrast-low text-right padding-md">
          <input className="resultscreen" value={next || total || screen || 0} />
        </div>

        <Input handler={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
