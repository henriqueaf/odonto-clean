import { createStore } from 'redux';

import rootReducer from './rootReducer';
import { ClientsState } from './clients/types';

export interface ApplicationState {
  clients: ClientsState;
}

/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
