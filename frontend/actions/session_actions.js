export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
import * as APIUtill from '../util/session_api_util';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = (user) => {
  return (dispatch) => {
    return APIUtill.login(user).then(
      (user) => (dispatch(receiveCurrentUser(user))),
      (errors)=>(dispatch(receiveErrors(errors)))
    );
  };
};

export const logout = () => {
  return (dispatch) => {
    return APIUtill.logout().then(
      () => (dispatch(receiveCurrentUser(null)))
    );
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUtill.signup(user).then(
      (user) => (dispatch(receiveCurrentUser(user))),
      (errors)=>(dispatch(receiveErrors(errors)))
    );
  };
};
