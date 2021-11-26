import React from 'react';
import Key from './Key';
import Output from './Output';
import Handler from './Handler';

class Calculator extends React.Component {
  render() {
    const keyNames = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',]
    const keys = keyNames.map((v) => {
      if (v === '÷' || v === 'x' || v === '-' || v === '+' || v === '=') {
        return <Key key={v} clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md foo'} name={v} />
      } else if (v === '0') {
        return <Key key={v} clickHandler={Handler} classes={'col-6 btn btn--subtle padding-y-md'} name={v} />
      } else {
        return <Key key={v} clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md'} name={v} />
      }
    })

    return <div className="grid container max-width-sm">
      <Output value={0} />
      {keys}
    </div>;
  }
}

export default Calculator;