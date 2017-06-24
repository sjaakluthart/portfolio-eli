import { HOME_GET, HOME_GET_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  photos: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case HOME_GET:
      return {
        ...state,
        ...{
          loading: true
        }
      };
    case HOME_GET_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          photos: action.payload
        }
      };
    default: return state;
  }
}
