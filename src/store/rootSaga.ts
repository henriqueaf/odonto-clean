import { all, takeLatest } from 'redux-saga/effects';

import { ClientsTypes } from './clients/types';
import { load } from './clients/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(ClientsTypes.LOAD_REQUEST, load)]);
}
