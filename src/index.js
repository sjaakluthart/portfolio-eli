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
import Paintings from './components/paintings';
import Drawings from './components/drawings';
import Sculptures from './components/sculptures';
import CV from './components/cv';
import './css/meyer-reset.css';
import './css/loader.css';
import './css/index.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <App>
          <Route exact path="/" component={Home} />
          <Route path="/paintings" component={Paintings} />
          <Route path="/drawings" component={Drawings} />
          <Route path="/sculptures" component={Sculptures} />
          <Route path="/cv" component={CV} />
        </App>
      </Switch>
    </HashRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
