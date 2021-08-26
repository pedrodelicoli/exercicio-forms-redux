const INITIAL_STATE = {
  Pessoal: {
    Nome: '',
    Email: '',
    CPF: 0,
    Endereço: '',
    Cidade: '',
  },
  Profissional: {
    ResumoCurriculo: '',
    Cargo: '',
    DescricaoCargo: '',
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PESSOAL':
    return {
      ...state, Pessoal: action.payload,
    };
  case 'PROFISSIONAL':
    return {
      ...state, Profissional: action.payload,
    };
  default: return state;
  }
};

export default reducer;
