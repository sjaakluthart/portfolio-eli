import { PAINTINGS_GET, PAINTINGS_GET_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  albums: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case PAINTINGS_GET:
      return {
        ...state,
        ...{
          loading: true
        }
      };
    case PAINTINGS_GET_SUCCESS:
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
