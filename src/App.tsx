import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import { createReduxStore } from './store';

const store = createReduxStore();

const App: React.FC = () => (
  <div className="container">
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>
);

export default App;
