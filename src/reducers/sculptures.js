import { SCULPTURES_GET, SCULPTURES_GET_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  albums: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SCULPTURES_GET:
      return {
        ...state,
        ...{
          loading: true
        }
      };
    case SCULPTURES_GET_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          albums: [...state.albums, ...[action.payload]]
        }
      };
    default: return state;
  }
}
