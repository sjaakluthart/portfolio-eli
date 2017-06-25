import { combineReducers } from 'redux';
import homeReducer from './home';
import collectionsReducer from './collections';
import setsReducer from './sets';

const rootReducer = combineReducers({
  home: homeReducer,
  collections: collectionsReducer,
  sets: setsReducer
});

export default rootReducer;
