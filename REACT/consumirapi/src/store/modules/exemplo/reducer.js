import * as types from '../types';

const initialState = {
  botaoClidado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Ocorreu tudo bem =)');
      const newState = { ...state };
      // se botão clicado for verdadeiro
      // ele se torna falso, se for falso
      // ele se torna verdadeiro
      newState.botaoClidado = !newState.botaoClidado;
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Ocorreu um erro =(');
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisiçaõ com saga');
      return state;
    }

    default:
      return state;
  }
}
