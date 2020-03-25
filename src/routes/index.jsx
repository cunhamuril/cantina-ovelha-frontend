import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Restaurant from '../pages/Restaurant';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/restaurants/:id" exact component={Restaurant} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
