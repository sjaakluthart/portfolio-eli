import axios from 'axios';
import map from 'lodash/map';
import { HOME_GET, HOME_GET_SUCCESS } from './types';
import settings from '../settings.json';

const homeGetSuccess = payload => ({
  type: HOME_GET_SUCCESS,
  payload
});

const homeGet = () => (
  (dispatch) => {
    dispatch({ type: HOME_GET });

    return axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${settings.apiKey}&photoset_id=${settings.homeAlbumId}&user_id=${settings.userId}&extras=url_l&format=json&nojsoncallback=1`)
    .then((res) => {
      if (res.status === 200 && res.data.stat === 'ok') {
        const payload = map(res.data.photoset.photo, photo => ({
          src: photo.url_l,
          width: parseInt(photo.width_l, 10),
          height: parseInt(photo.height_l, 10)
        }));

        dispatch(homeGetSuccess(payload));
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
);

export default homeGet;
