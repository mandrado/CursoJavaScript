import * as types from '../types';

const initialState = {
  IsLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      console.log('Ocorreu tudo bem =)');
      const newState = { ...state };
      // se botão clicado for verdadeiro
      // ele se torna falso, se for falso
      // ele se torna verdadeiro
      // newState.botaoClidado = !newState.botaoClidado;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      console.log('Ocorreu um erro =(');
      return state;
    }
    case types.LOGIN_REQUEST: {
      console.log('REDUCER', action.payload);
      return state;
    }

    default:
      return state;
  }
}
