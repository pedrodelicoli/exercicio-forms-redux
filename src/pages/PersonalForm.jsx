import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { actionPessoal } from '../redux/actions';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';

class PersonalForm extends Component {
  constructor() {
    super();
    this.state = {
      Nome: '',
      Email: '',
      CPF: 0,
      Endereço: '',
      Cidade: '',
      Estado: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleNextPage() {
    const { changeValue, history } = this.props;
    changeValue(this.state);
    history.push('./professionalForm');
  }

  render() {
    const { handleChange, handleNextPage } = this;
    return (
      <div>
        <fieldset>
          <Input
            name="Nome"
            type="text"
            onChange={ handleChange }
          />
          <Input
            name="Email"
            type="email"
            onChange={ handleChange }
          />
          <Input
            name="CPF"
            type="text"
            onChange={ handleChange }
          />
          <Input
            name="Endereço"
            type="text"
            onChange={ handleChange }
          />
          <Input
            name="Cidade"
            type="text"
            onChange={ handleChange }
          />
          <Select name="Estado" onChange={ handleChange } />
          <Button
            onClick={ handleNextPage }
          />
        </fieldset>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeValue: (state) => dispatch(actionPessoal(state)) });

PersonalForm.propTypes = {
  changeValue: Proptypes.func.isRequired,
  history: Proptypes.shape().isRequired,
};

export default connect(null, mapDispatchToProps)(PersonalForm);
