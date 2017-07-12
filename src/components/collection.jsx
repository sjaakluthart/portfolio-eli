import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import isEmpty from 'lodash/isEmpty';
import { Link, Element } from 'react-scroll';
import Gallery from './gallery';
import setsGet from '../actions/sets';
import Loader from './loader';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  sets: PropTypes.arrayOf(Object).isRequired,
  collection: PropTypes.instanceOf(Object).isRequired
};

class Paintings extends Component {
  componentDidMount() {
    const { dispatch, sets, collection } = this.props;

    if (isEmpty(sets)) {
      dispatch(setsGet(collection.id, map(collection.set, set => set.id)));
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, sets, collection } = nextProps;

    if (isEmpty(sets)) {
      dispatch(setsGet(collection.id, map(collection.set, set => set.id)));
    }
  }

  render() {
    const { loading, sets } = this.props;

    if (loading || isEmpty(sets)) {
      return (
        <article className="loader">
          <Loader />
        </article>
      );
    }

    const sortedSets = sortBy(sets, 'createdAt').reverse();

    return (
      <article className="collection">
        <nav>
          {map(sortedSets, set => (
            <Link
              key={set.title}
              activeClass="active"
              to={set.title}
              spy
              smooth
              offset={-48}
            >
              {set.title}
            </Link>
          ))}
        </nav>
        {map(sortedSets, set => (
          <Element key={set.title} name={set.title}>
            <Gallery set={set} />
          </Element>
        ))}
      </article>
    );
  }
}

Paintings.propTypes = propTypes;

const mapStateToProps = (state, props) => ({
  loading: state.sets.loading,
  collection: state.collections.data[props.match.params.collectionId],
  sets: state.sets.data[props.match.params.collectionId] || []
});

export default connect(mapStateToProps)(Paintings);
