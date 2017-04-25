export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_ROOM = "RECEIVE_ROOM";
export const REMOVE_ROOM = "DELETE_ROOM";
import * as RoomAPIUtil from '../util/rooms_api_util';

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




export const fetchRooms = (filters) => {
  return (dispatch) => {
    return RoomAPIUtil.fetchRooms(filters).then(
      (rooms) => (dispatch(receiveRooms(rooms)))
    );
  };
};

export const fetchMyRooms = () => {
  return (dispatch) => {
    return RoomAPIUtil.fetchMyRooms().then(
      (rooms) => (dispatch(receiveRooms(rooms)))
    );
  };
};

export const fetchRoom = (id) => {
  return (dispatch) => {
    return RoomAPIUtil.fetchRoom(id).then(
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
  RoomAPIUtil.deleteRoom(room).then(room => dispatch(removeRoom(room)))
);
