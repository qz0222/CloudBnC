import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';
import {RECEIVE_BOOKINGS} from '../actions/booking_actions.js';

const _defaultState = {
  currentUser: null,
  errors: [],
};

const sessionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      newState.currentUser.bookings=action.bookings;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState.currentUser=action.user;
      newState.errors=[];
      return newState;
    case RECEIVE_ERRORS:
      let message = action.errors.responseJSON;
      if (message === undefined){message=[];}
      newState.errors = message;
      return newState;
    default:
      return oldState;

  }
};

export default sessionReducer;
