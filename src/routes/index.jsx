import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from '../pages/Home'
import Restaurants from '../pages/Restaurants'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/restaurants" exact component={Restaurants} />
    </Switch>
  </BrowserRouter>
)

export default Routes