import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';
import PhotoGallery from './photo-gallery';

const propTypes = {
  set: PropTypes.shape({
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

    this.openLightBox = this.openLightBox.bind(this);
    this.closeLightBox = this.closeLightBox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
  }

  toggleLightBox() {
    this.setState({
      open: !this.state.open
    });
  }

  openLightBox(index) {
    this.setState({
      open: true,
      currentImage: index
    });
  }

  closeLightBox() {
    this.setState({
      open: false,
      currentImage: 0
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
    const { set } = this.props;

    return (
      <section className="gallery">
        <h1>{set.title}</h1>
        <PhotoGallery photos={set.photos} onClickPhoto={this.openLightBox} margin={4} />
        <Lightbox
          images={set.photos}
          isOpen={this.state.open}
          onClose={this.closeLightBox}
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
