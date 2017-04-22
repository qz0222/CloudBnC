import sessionReducer from './session_reducer';
import roomsReducer from './rooms_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  session: sessionReducer,
  rooms: roomsReducer
});

export default rootReducer;
