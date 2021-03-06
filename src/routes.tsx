import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard/container';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard}></Route>
    </Switch>
  </BrowserRouter>
);
