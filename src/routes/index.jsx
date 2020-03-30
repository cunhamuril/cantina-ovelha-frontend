import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Restaurant from '../pages/Restaurant';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/restaurants/:id" exact component={Restaurant} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
