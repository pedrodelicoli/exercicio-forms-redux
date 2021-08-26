import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, type, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {`${name}:`}
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: Proptypes.string,
  type: Proptypes.string,
  name: Proptypes.string,
  onChange: Proptypes.func,
  value: Proptypes.string,
}.isrequired;

export default Input;
