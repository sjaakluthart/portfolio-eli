/* eslint react/jsx-filename-extension: [0] */
/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import App from './components/app';
import Home from './components/home';
import './css/meyer-reset.css';
import './css/index.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <App>
          <Route exact path="/" component={Home} />
        </App>
      </Switch>
    </HashRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
