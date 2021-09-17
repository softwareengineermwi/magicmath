import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.Component {
  render(){
    return <button type="button" className={this.props.classes}>{this.props.name}</button>;
  }
}

Key.propTypes = {
  name: PropTypes.string,
  handler: PropTypes.func,
  classes: PropTypes.string,
};

Key.defaultProps = {
  name: PropTypes.string,
  handler: PropTypes.func,
  classes: PropTypes.string,
};

export default Key;
