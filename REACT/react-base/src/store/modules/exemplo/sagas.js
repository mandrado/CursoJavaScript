import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  // eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve();
      reject();
    }, 2000);
  });

function* exemploRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clickBotaoSuccess());
  } catch (e) {
    toast.error('Deu erro!');
    yield put(actions.clickBotaoFailure);
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exemploRequest)]);
