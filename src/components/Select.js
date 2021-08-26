import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Select extends Component {
  render() {
    const { onChange, name } = this.props;
    return (
      <label htmlFor="estados">
        Estado
        <select name={ name } onChange={ onChange } required="required" id="estados">
          <option name="Acre">Acre</option>
          <option name="Alagoas">Alagoas</option>
          <option name="Amapá">Amapá</option>
          <option name="Amazonas">Amazonas</option>
          <option name="Bahia">Bahia</option>
          <option name="Ceará">Ceará</option>
          <option name="Distrito Federal">Distrito Federal</option>
          <option name="Espírito Santo">Espírito Santo</option>
          <option name="Goiás">Goiás</option>
          <option name="Maranhão">Maranhão</option>
          <option name="Mato Grosso">Mato Grosso</option>
          <option name="Mato Grosso do Sul">Mato Grosso do Sul</option>
          <option name="Minas Gerais">Minas Gerais</option>
          <option name="Pará">Pará</option>
          <option name="Paraíba">Paraíba</option>
          <option name="Paraná">Paraná</option>
          <option name="Pernambuco">Pernambuco</option>
          <option name="Piauí">Piauí</option>
          <option name="Rio de Janeiro">Rio de Janeiro</option>
          <option name="Rio Grande do Norte">Rio Grande do Norte</option>
          <option name="Rio Grande do Sul">Rio Grande do Sul</option>
          <option name="Rondônia">Rondônia</option>
          <option name="Roraima">Roraima</option>
          <option name="Santa Catarina">Santa Catarina</option>
          <option name="São Paulo">São Paulo</option>
          <option name="Sergipe">Sergipe</option>
          <option name="Tocantins">Tocantins</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  onChange: Proptypes.func,
  name: Proptypes.string,
}.isrequired;

export default Select;
