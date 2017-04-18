import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser:action.user, errors:[]};

    case RECEIVE_ERRORS:
      const newState = merge({}, oldState);
      newState.errors.push (action.errors.responseJSON);
      return newState;
    default:
      return oldState;

  }
};

export default sessionReducer;
