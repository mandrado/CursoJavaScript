// eslint-disable-next-line no-unused-vars
import { call, put, all, takeLatest } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
// import * as actions from './actions';
import * as types from '../types';

// eslint-disable-next-line require-yield
function* loginRequest({ payload }) {
  // eslint-disable-next-line no-console
  console.log('SAGA', payload);
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
