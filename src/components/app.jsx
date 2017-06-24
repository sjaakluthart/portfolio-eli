import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired
};

const App = ({ children }) => (
  <main>
    <h1>Eli Zegers</h1>
    <section>
      {children}
    </section>
  </main>
);

App.propTypes = propTypes;

export default App;
