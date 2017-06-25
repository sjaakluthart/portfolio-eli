import { SETS_GET, SETS_GET_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  data: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SETS_GET:
      return {
        ...state,
        ...{
          loading: true
        }
      };
    case SETS_GET_SUCCESS: {
      const collectionId = action.payload.collectionId;
      const album = action.payload.album;
      const albums = state.data[collectionId] || [];

      return {
        ...state,
        ...{
          loading: false,
          data: {
            ...state.data,
            [collectionId]: [...albums, ...[album]]
          }
        }
      };
    }
    default: return state;
  }
}
