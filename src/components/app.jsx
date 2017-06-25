import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import Header from './header';
import collectionsGet from '../actions/collections';
import Loader from './loader';

const propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  collections: PropTypes.instanceOf(Object).isRequired
};

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(collectionsGet());
  }

  render() {
    const { children, loading, collections } = this.props;

    if (loading || isEmpty(collections)) {
      return (
        <main>
          <article className="loader">
            <Loader />
          </article>
        </main>
      );
    }

    return (
      <main>
        <Header collections={collections} />
        {children}
      </main>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = state => ({
  collections: state.collections.data,
  loading: state.collections.loading
});

export default connect(mapStateToProps)(App);
