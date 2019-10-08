import { createStore, Store, applyMiddleware, StoreEnhancer } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { ClientsState } from './clients/types';

export interface ApplicationState {
  clients: ClientsState;
}

export const createReduxStore = ({
  middlewares = [],
  enhancers = [],
}: {
  middlewares?: SagaMiddleware[];
  enhancers?: StoreEnhancer[];
} = {}): Store => {
  const sagaMiddleware = createSagaMiddleware();

  middlewares.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middlewares));
  const enhancer = composeWithDevTools(...enhancers);

  const store: Store<ApplicationState> = createStore(rootReducer, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
};
