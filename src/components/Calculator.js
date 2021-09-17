/* eslint-disable no-unused-vars */
import React from 'react';
import Key from './Key';
import Output from './Output';
import Handler from './Handler';

class Calculator extends React.Component {
  render() {
    return <div className="grid container max-width-sm">
      <Output value={0} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md'} name={'AC'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md'} name={'+/-'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md'} name={'%'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md foo'} name={'÷'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md'} name={'7'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md'} name={'8'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md'} name={'9'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md foo'} name={'x'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md'} name={'4'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md'} name={'5'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md'} name={'6'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md foo'} name={'-'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md'} name={'1'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md'} name={'2'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md'} name={'3'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md foo'} name={'+'} />
      <Key clickHandler={Handler} classes={'col-6 btn btn--subtle padding-y-md'} name={'0'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md'} name={'.'} />
      <Key clickHandler={Handler} classes={'col-3 btn btn--subtle padding-y-md foo'} name={'='} />
    </div>;
  }
}

export default Calculator;
/* eslint-enable no-unused-vars */