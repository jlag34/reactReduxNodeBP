import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Home from './components/home';

const componentRoutes = (
  <Route component={App} path='/'>
    <Route component={Home} path='test' />
  </Route>
);

const Routes = () => {
  return <Router history={ browserHistory } routes={ componentRoutes } />
};

export default Routes;