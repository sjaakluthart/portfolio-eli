import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import sortBy from 'lodash/sortBy';
import Gallery from './gallery';
import sculpturesGet from '../actions/sculptures';
import Loader from './loader';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  albums: PropTypes.arrayOf(Object).isRequired
};

class Paintings extends Component {
  componentDidMount() {
    const { dispatch, albums } = this.props;

    if (isEmpty(albums)) {
      dispatch(sculpturesGet());
    }
  }

  render() {
    const { loading, albums } = this.props;

    if (loading || isEmpty(albums)) {
      return (
        <article className="loader">
          <Loader />
        </article>
      );
    }

    const sortedAlbums = sortBy(albums, album => album.title);

    return (
      <article className="sculptures">
        {map(sortedAlbums, album => (
          <Gallery key={album.title} album={album} />
        ))}
      </article>
    );
  }
}

Paintings.propTypes = propTypes;

const mapStateToProps = state => ({
  loading: state.sculptures.loading,
  albums: state.sculptures.albums
});

export default connect(mapStateToProps)(Paintings);
