import * as types from '../types';

export function clickBotaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function clickBotaoSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}

export function clickBotaoFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
