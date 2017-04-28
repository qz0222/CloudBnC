import * as BookingAPIUtil from '../util/booking_api_util';
import {fetchRoom} from './room_actions';
import {fetchRooms} from './room_actions';



export const createBooking = booking => dispatch => {
  return BookingAPIUtil.createBooking(booking);
                      // .then(()=>dispatch(fetchRoom(booking.room_id)));
};

export const deleteBooking = booking => dispatch => {
  return BookingAPIUtil.deleteBooking(booking.id);
                      // .then(()=>dispatch(fetchRooms()));
};
