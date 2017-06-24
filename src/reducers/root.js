import { combineReducers } from 'redux';
import homeReducer from './home';
import paintingsReducer from './paintings';

const rootReducer = combineReducers({
  home: homeReducer,
  paintings: paintingsReducer
});

export default rootReducer;
