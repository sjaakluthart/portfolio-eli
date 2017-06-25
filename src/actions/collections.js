import axios from 'axios';
import { COLLECTIONS_GET, COLLECTIONS_GET_SUCCESS } from './types';
import settings from '../settings.json';

const collectionsGetSuccess = payload => ({
  type: COLLECTIONS_GET_SUCCESS,
  payload
});

const collectionsGet = () => (
  (dispatch) => {
    dispatch({ type: COLLECTIONS_GET });

    const collectionUrl = `https://api.flickr.com/services/rest/?method=flickr.collections.getTree&api_key=${settings.apiKey}&user_id=${settings.userId}&format=json&nojsoncallback=1`;
    return axios.get(collectionUrl)
    .then((res) => {
      if (res.status === 200 && res.data.stat === 'ok') {
        const collections = res.data.collections.collection;

        dispatch(collectionsGetSuccess(collections));
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
);

export default collectionsGet;
