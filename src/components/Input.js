import React from 'react';
import PropTypes from 'prop-types';
import Key from './Key';

const Input = ({ handler }) => (
  <div className="grid col-12">
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md" name="AC" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md" name="+/-" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md" name="%" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md foo" name="÷" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md" name="7" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md" name="8" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md" name="9" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md foo" name="x" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md" name="4" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md" name="5" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md" name="6" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md foo" name="-" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md" name="1" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md" name="2" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md" name="3" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md foo" name="+" />
    <Key handler={handler} classes="col-6 btn btn--subtle padding-y-md" name="0" />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md" name="." />
    <Key handler={handler} classes="col-3 btn btn--subtle padding-y-md foo" name="=" />
  </div>
);

Input.propTypes = {
  handler: PropTypes.func,
};

Input.defaultProps = {
  handler: PropTypes.func,
};

export default Input;
