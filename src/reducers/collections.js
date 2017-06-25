import reduce from 'lodash/reduce';
import { COLLECTIONS_GET, COLLECTIONS_GET_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  data: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case COLLECTIONS_GET:
      return {
        ...state,
        ...{
          loading: true
        }
      };
    case COLLECTIONS_GET_SUCCESS: {
      const collections = reduce(action.payload, (result, value) => {
        result[value.id] = value; // eslint-disable-line no-param-reassign

        return result;
      }, {});

      return {
        ...state,
        ...{
          loading: false,
          data: collections
        }
      };
    }
    default: return state;
  }
}
