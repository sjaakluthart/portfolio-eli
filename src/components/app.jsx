import React from 'react';
import Header from './header';

function App({ children }) {
  return (
    <section className="app">
      <Header />
      {children}
    </section>
  );
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;
