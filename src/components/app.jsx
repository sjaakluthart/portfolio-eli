import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';

const propTypes = {
  children: PropTypes.node.isRequired
};

const App = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
);

App.propTypes = propTypes;

export default App;
