import { createStore } from 'redux';

const initialState = {
  botaoClidado: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      // se botão clicado for verdadeiro
      // ele se torna falso, se for falso
      // ele se torna verdadeiro
      newState.botaoClidado = !newState.botaoClidado;
      return newState;
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
