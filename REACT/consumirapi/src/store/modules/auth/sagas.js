// eslint-disable-next-line no-unused-vars
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

// eslint-disable-next-line require-yield
function* loginRequest({ payload }) {
  // eslint-disable-next-line no-console
  console.log('SAGA', payload);
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Login com sucesso');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Usuário ou senha inválidos.');
    yield put(actions, actions.loginFailure());
  }
}
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Beare ${token}`;
}

function registerRequest({ payload }) {
  // eslint-disable-next-line no-unused-vars
  const { id, nome, email, password } = payload;
  console.log('to be continued ...');
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
