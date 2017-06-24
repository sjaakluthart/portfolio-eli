import axios from 'axios';
import map from 'lodash/map';
import each from 'lodash/each';
import { PAINTINGS_GET, PAINTINGS_GET_SUCCESS } from './types';
import settings from '../settings.json';

const paintingsGetSuccess = payload => ({
  type: PAINTINGS_GET_SUCCESS,
  payload
});

const paintingsGet = () => (
  (dispatch) => {
    dispatch({ type: PAINTINGS_GET });

    const collectionUrl = `https://api.flickr.com/services/rest/?method=flickr.collections.getTree&api_key=${settings.apiKey}&collection_id=${settings.paintingsCollectionId}&user_id=${settings.userId}&format=json&nojsoncallback=1`;
    return axios.get(collectionUrl)
    .then((res) => {
      if (res.status === 200 && res.data.stat === 'ok') {
        const albums = res.data.collections.collection[0].set;

        each(albums, (album) => {
          const albumUrl = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${settings.apiKey}&photoset_id=${album.id}&user_id=${settings.userId}&extras=url_l,description&format=json&nojsoncallback=1`;
          return axios.get(albumUrl)
          .then((paintingRes) => {
            if (paintingRes.status === 200 && paintingRes.data.stat === 'ok') {
              const paintingAlbum = paintingRes.data.photoset;

              const photos = map(paintingAlbum.photo, photo => ({
                src: photo.url_l,
                width: parseInt(photo.width_l, 10),
                height: parseInt(photo.height_l, 10),
                caption: `${photo.title}${photo.description && photo.description._content ? ` - ${photo.description._content}` : ''}` // eslint-disable-line no-underscore-dangle
              }));

              dispatch(paintingsGetSuccess({
                title: paintingAlbum.title,
                photos
              }));
            }
          })
          .catch((err) => {
            console.log(err);
          });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
);

export default paintingsGet;
