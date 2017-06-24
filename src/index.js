/* eslint react/jsx-filename-extension: [0] */
/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './css/meyer-reset.css';
import './css/index.css';

ReactDOM.render(<p>hello world</p>, document.getElementById('root'));
registerServiceWorker();
