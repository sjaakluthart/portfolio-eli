/* eslint no-underscore-dangle: ["error", { "allow": ["_content"] }] */
import axios from 'axios';
import each from 'lodash/each';
import map from 'lodash/map';
import { SETS_GET_SUCCESS } from './types';
import settings from '../settings.json';

const setsGetSuccess = payload => ({
  type: SETS_GET_SUCCESS,
  payload
});

const setsGet = (collectionId, sets) => (
  dispatch => (
    each(sets, (setId) => {
      const album = {};
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getInfo&api_key=${settings.apiKey}&photoset_id=${setId}&user_id=${settings.userId}&format=json&nojsoncallback=1`)
      .then((res) => {
        if (res.status === 200 && res.data.stat === 'ok') {
          album.createdAt = new Date(res.data.photoset.date_create * 1000);

          axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${settings.apiKey}&photoset_id=${setId}&user_id=${settings.userId}&extras=url_l,description&format=json&nojsoncallback=1`)
          .then((photosRes) => {
            if (photosRes.status === 200 && photosRes.data.stat === 'ok') {
              const photos = map(photosRes.data.photoset.photo, photo => ({
                src: photo.url_l,
                width: parseInt(photo.width_l, 10),
                height: parseInt(photo.height_l, 10),
                caption: `${photo.title} - ${photo.description && photo.description._content}`
              }));

              album.title = photosRes.data.photoset.title;
              album.photos = photos;

              dispatch(setsGetSuccess({
                collectionId,
                album
              }));
            }
          })
          .catch((err) => {
            console.log(err);
          });
        }
      })
      .catch(err => console.log(err));
    })
  )
);

export default setsGet;
