import React from 'react';
import Output from './Output';
import Input from './Input';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      total: null,
    };
    this.handler = this.handler.bind(this);
  }

  handler(e) {
    this.setState((state) => calculate(state, e.target.innerText));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="grid container max-width-sm">
        <Output value={next || (total || '0')} />
        <Input handler={this.handler} />
      </div>
    );
  }
}

export default Calculator;
