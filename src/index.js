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
import Collection from './components/collection';
import CV from './components/cv';
import About from './components/about';
import './css/meyer-reset.css';
import './css/loader.css';
import './css/index.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <App>
          <Route exact path="/" component={Home} />
          <Route path="/collection/:collectionId" component={Collection} />
          <Route path="/cv" component={CV} />
          <Route path="/about" component={About} />
        </App>
      </Switch>
    </HashRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
