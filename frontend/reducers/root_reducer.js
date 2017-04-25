import sessionReducer from './session_reducer';
import roomsReducer from './rooms_reducer';
import FiltersReducer from './filters_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  session: sessionReducer,
  rooms: roomsReducer,
  filters: FiltersReducer,
});

export default rootReducer;
