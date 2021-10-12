import { all } from 'redux-saga/effects';
import exemplo from './exemplo/sagas';

export default function* rootSaga() {
  return yield all([exemplo]);
}
