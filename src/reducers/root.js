import { combineReducers } from 'redux';
import homeReducer from './home';
import paintingsReducer from './paintings';
import drawingsReducer from './drawings';

const rootReducer = combineReducers({
  home: homeReducer,
  paintings: paintingsReducer,
  drawings: drawingsReducer
});

export default rootReducer;
