import * as BookingAPIUtil from '../util/booking_api_util';
import {hashHistory} from 'react-router';
export const RECEIVE_BOOKINGS='RECEIVE_BOOKINGS';


export const createBooking = booking => dispatch => {
  return BookingAPIUtil.createBooking(booking)
  .then((bookings)=>dispatch(fetchMyBookings(bookings)))
                      .then(()=>hashHistory.push('/bookings'));
};

export const deleteBooking = booking => dispatch => {
  return BookingAPIUtil.deleteBooking(booking.id)
                      .then((bookings)=>dispatch(fetchMyBookings(bookings)));
};

export const fetchMyBookings = () => dispatch => {
  return BookingAPIUtil.fetchMyBookings()
                      .then((bookings)=>dispatch(receiveMyBookings(bookings)));
};


export const receiveMyBookings = (bookings) => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings
  };
};
