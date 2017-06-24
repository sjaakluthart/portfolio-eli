import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';
import PhotoGallery from './photo-gallery';

const propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }))
  }).isRequired
};

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      currentImage: 0
    };

    this.toggleLightBox = this.toggleLightBox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
  }

  toggleLightBox() {
    this.setState({
      open: !this.state.open
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  render() {
    const { album } = this.props;

    return (
      <section className="gallery">
        <h1>{album.title}</h1>
        <PhotoGallery photos={album.photos} onClickPhoto={this.toggleLightBox} margin={4} />
        <Lightbox
          images={album.photos}
          isOpen={this.state.open}
          onClose={this.toggleLightBox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
        />
      </section>
    );
  }
}

Gallery.propTypes = propTypes;

export default Gallery;
