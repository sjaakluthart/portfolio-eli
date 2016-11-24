import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './app';
import Home from './home';

function AppRouter() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  );
}

export default AppRouter;
