import { all, call } from 'redux-saga/effects';

import { SagaIterator } from 'redux-saga';
import { syncClients } from './clients/sagas';

export default function* rootSaga(): SagaIterator {
  yield all([call(syncClients)]);
}
