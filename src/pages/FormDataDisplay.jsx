import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    const { Pessoal, Profissional } = this.props;
    const { Nome, CPF, Email, Endereço, Cidade, Estado } = Pessoal;
    const { ResumoCurriculo, Cargo, DescricaoCargo } = Profissional;
    return (
      <div>
        <h2>Dados Enviados</h2>
        <div>
          <div>
            Nome:
            { Nome }
          </div>
          <div>
            CPF:
            { CPF }
          </div>
          <div>
            Email:
            { Email }
          </div>
          <div>
            Endereço:
            { Endereço }
          </div>
          <div>
            Cidade:
            { Cidade }
          </div>
          <div>
            Estado:
            { Estado }
          </div>
        </div>
        <div>
          <div>
            Resumo do Curriculo:
            { ResumoCurriculo }
          </div>
          <div>
            Cargo:
            { Cargo }
          </div>
          <div>
            Descrição do Cargo:
            { DescricaoCargo }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Pessoal: state.Pessoal,
  Profissional: state.Profissional,
});
FormDataDisplay.propTypes = {
  Profissional: PropTypes.objectOf(PropTypes.string).isRequired,
  Pessoal: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(FormDataDisplay);
