import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { actionProfessional } from '../redux/actions';
import Button from '../components/Button';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      ResumoCurriculo: '',
      Cargo: '',
      DescricaoCargo: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleNextPage() {
    const { changeValue, history } = this.props;
    changeValue(this.state);
    history.push('./formDisplay');
  }

  render() {
    const { handleChange, handleNextPage } = this;
    return (
      <fieldset>
        <label htmlFor="ResumoCurriculo">
          Resumo:
          <textarea
            id="ResumoCurriculo"
            cols="33"
            rows="5"
            placeholder="Resumo do currículo"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="Cargo">
          Cargo:
          <input id="Cargo" type="text" onChange={ handleChange } />
        </label>
        <label htmlFor="DescricaoCargo">
          Descrição do Cargo:
          <textarea
            id="DescricaoCargo"
            cols="33"
            rows="5"
            placeholder="Dexcrição do Cargo"
            onChange={ handleChange }
          />
        </label>
        <Link to="/formDisplay">
          <Button onClick={ handleNextPage } />
        </Link>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeValue: (state) => dispatch(actionProfessional(state)) });

ProfessionalForm.propTypes = {
  changeValue: Proptypes.func.isRequired,
  history: Proptypes.shape().isRequired,
};

export default connect(null, mapDispatchToProps)(ProfessionalForm);
