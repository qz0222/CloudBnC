export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_ROOM = "RECEIVE_ROOM";
export const REMOVE_ROOM = "DELETE_ROOM";
import * as RoomAPIUtill from '../util/rooms_api_util';

export const receiveRooms = (rooms) => {
  return {
    type: RECEIVE_ROOMS,
    rooms
  };
};

export const receiveRoom = (room) => {
  return {
    type: RECEIVE_ROOM,
    room
  };
};

export const removeRoom = (room) => {
  return {
    type: REMOVE_ROOM,
    room
  };
};




export const fetchRooms = () => {
  return (dispatch) => {
    return RoomAPIUtill.fetchRooms().then(
      (rooms) => (dispatch(receiveRooms(rooms)))
    );
  };
};

export const fetchRoom = (id) => {
  return (dispatch) => {
    return RoomAPIUtill.fetchRoom(id).then(
      (room) => (dispatch(receiveRoom(room)))
    );
  };
};

export const createRoom = room => dispatch => (
  RoomAPIUtil.createRoom(room)
    .then(room => dispatch(receiveRoom(room)))
);

export const updateRoom = room => dispatch => (
  RoomAPIUtil.updateRoom(room).then(room => dispatch(receiveRoom(room)))
);

export const destroyRoom = room => dispatch => (
  RoomAPIUtil.destroyRoom(room).then(room => dispatch(removeRoom(room)))
);
