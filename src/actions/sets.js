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
    each(sets, setId => (
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${settings.apiKey}&photoset_id=${setId}&user_id=${settings.userId}&extras=url_l&format=json&nojsoncallback=1`)
      .then((res) => {
        if (res.status === 200 && res.data.stat === 'ok') {
          const photos = map(res.data.photoset.photo, photo => ({
            src: photo.url_l,
            width: parseInt(photo.width_l, 10),
            height: parseInt(photo.height_l, 10),
            caption: photo.title
          }));

          const album = {
            title: res.data.photoset.title,
            photos
          };

          dispatch(setsGetSuccess({
            collectionId,
            album
          }));
        }
      })
      .catch((err) => {
        console.log(err);
      })
    ))
  )
);

export default setsGet;
