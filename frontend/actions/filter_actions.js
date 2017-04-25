import { fetchRooms } from './room_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchRooms(getState().filters)(dispatch);
};

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
