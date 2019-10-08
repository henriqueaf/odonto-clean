import { put, takeLatest, call, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  QuerySnapshot,
  QueryDocumentSnapshot,
} from '@firebase/firestore-types';

import * as actions from './actions';
import { Client, ClientsTypes } from './types';
import ReduxSagaFirebase from '../../config/firebase';

function* fetchClients(): SagaIterator {
  try {
    const snapshot: QuerySnapshot = yield call(
      ReduxSagaFirebase.firestore.getCollection,
      'clients'
    );

    const clients: Client[] = [];

    snapshot.forEach((document: QueryDocumentSnapshot) => {
      clients.push({
        id: document.id,
        name: document.get('name'),
      });
    });

    yield put(actions.fetchClientsSuccess(clients));
  } catch (error) {
    yield put(actions.fetchClientsFailure(error));
  }
}

export function* watchFetchClients(): SagaIterator {
  yield takeLatest(ClientsTypes.FETCH_CLIENTS_REQUEST, fetchClients);
}

export function* syncClients(): SagaIterator {
  yield fork(ReduxSagaFirebase.firestore.syncCollection, 'clients', {
    successActionCreator: actions.syncClientsSuccess,
  });
}
