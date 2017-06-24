import axios from 'axios';
import map from 'lodash/map';
import each from 'lodash/each';
import { DRAWINGS_GET, DRAWINGS_GET_SUCCESS } from './types';
import settings from '../settings.json';

const drawingsGetSuccess = payload => ({
  type: DRAWINGS_GET_SUCCESS,
  payload
});

const drawingsGet = () => (
  (dispatch) => {
    dispatch({ type: DRAWINGS_GET });

    const collectionUrl = `https://api.flickr.com/services/rest/?method=flickr.collections.getTree&api_key=${settings.apiKey}&collection_id=${settings.drawingsCollectionId}&user_id=${settings.userId}&format=json&nojsoncallback=1`;
    return axios.get(collectionUrl)
    .then((res) => {
      if (res.status === 200 && res.data.stat === 'ok') {
        const albums = res.data.collections.collection[0].set;

        each(albums, (album) => {
          const albumUrl = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${settings.apiKey}&photoset_id=${album.id}&user_id=${settings.userId}&extras=url_l&format=json&nojsoncallback=1`;
          return axios.get(albumUrl)
          .then((drawingRes) => {
            if (drawingRes.status === 200 && drawingRes.data.stat === 'ok') {
              const drawingAlbum = drawingRes.data.photoset;

              const photos = map(drawingAlbum.photo, photo => ({
                src: photo.url_l,
                width: parseInt(photo.width_l, 10),
                height: parseInt(photo.height_l, 10),
                caption: photo.title
              }));

              dispatch(drawingsGetSuccess({
                title: drawingAlbum.title,
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

export default drawingsGet;