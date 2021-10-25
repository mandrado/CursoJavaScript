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
    yield put(actions.loginFailure());
  }
}
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Beare ${token}`;
}

// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  // eslint-disable-next-line no-unused-vars
  const { id, nome, email, password } = payload;

  try {
    if (id) {
      // se existe id fazer atualização
      yield call(axios.put, '/users', {
        email,
        nome,
        password: password || undefined,
      });
      toast.success('Conta alterada com sucesso!');
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
    } else {
      // se não existe id fazer a criação do usuário
      yield call(axios.post, '/users', {
        email,
        nome,
        password,
      });
      toast.success('Conta criada com sucesso!');
      yield put(actions.registerCreatedSuccess({ nome, email, password }));
      history.push('/login');
    }
  } catch (e) {
    const errors = get(e, 'response.data.error', []);
    // eslint-disable-next-line no-unused-vars
    const status = get(e, 'response.status', 0);
    if (status === 401) {
      toast.error('Voce precisa fer login novamente!');
      return history.push('/login');
    }
    // se usuário não estiver logado
    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido.');
    }
    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
