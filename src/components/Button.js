import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick, to } = this.props;
    return (
      <button
        type="submit"
        onClick={ onClick }
        to={ to }
      >
        Enviar
      </button>
    );
  }
}

Button.propTypes = {
  onClick: Proptypes.func,
}.isrequired;

export default Button;
