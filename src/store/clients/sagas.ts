import { put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { loadSuccess, loadFailure } from './actions';
import { Client } from './types';

export function* load(): SagaIterator {
  try {
    const response: Client[] = [
      { id: 1, name: 'Client 1' },
      { id: 2, name: 'Client 2' },
    ];

    yield put(loadSuccess(response));
  } catch (error) {
    yield put(loadFailure(error));
  }
}
