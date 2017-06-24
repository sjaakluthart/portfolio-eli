import { combineReducers } from 'redux';
import homeReducer from './home';
import paintingsReducer from './paintings';
import drawingsReducer from './drawings';
import sculpturesReducer from './sculptures';

const rootReducer = combineReducers({
  home: homeReducer,
  paintings: paintingsReducer,
  drawings: drawingsReducer,
  sculptures: sculpturesReducer
});

export default rootReducer;
