import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import Chance from 'chance';
import homeGet from '../actions/home';
import Loader from './loader';

const chance = new Chance();

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  photos: PropTypes.arrayOf(Object).isRequired
};

class Home extends Component {
  componentDidMount() {
    const { dispatch, photos } = this.props;

    if (isEmpty(photos)) {
      dispatch(homeGet());
    }
  }

  render() {
    const { loading, photos } = this.props;

    if (loading || isEmpty(photos)) {
      return (
        <article className="home">
          <Loader />
        </article>
      );
    }

    const photo = chance.pickone(photos);

    const style = {
      image: {
        backgroundImage: `url(${photo.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '80%',
        height: '80%'
      }
    };

    return (
      <article className="home">
        <div style={style.image} />
      </article>
    );
  }
}

Home.propTypes = propTypes;

const mapStateToProps = state => ({
  loading: state.home.loading,
  photos: state.home.photos
});

export default connect(mapStateToProps)(Home);
