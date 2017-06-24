import { DRAWINGS_GET, DRAWINGS_GET_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  albums: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case DRAWINGS_GET:
      return {
        ...state,
        ...{
          loading: true
        }
      };
    case DRAWINGS_GET_SUCCESS:
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
