import {
  RECEIVE_BOOKINGS} from '../actions/booking_actions';
import merge from 'lodash/merge';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    default:
      return state;
  }
};

export default BookingsReducer;
