import {
  RECEIVE_ROOM,
  RECEIVE_ROOMS,
  REMOVE_ROOM } from '../actions/rooms_actions';
import merge from 'lodash/merge';

const RoomsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ROOMS:
      return action.rooms;
    case RECEIVE_ROOM:
      const newRoomh = {[action.room.id]: action.room};
      return merge({}, state, newRoomh);
    case REMOVE_ROOM:
      delete newState[action.room.id];
      return newState;
      ///////TODO
    // case RECEIVE_REVIEW:
    //   const review = action.review;
    //   newState[review.room_id].reviews.push(review);
    //   return newState;
      //////
    default:
      return state;
  }
};

export default RoomsReducer;
