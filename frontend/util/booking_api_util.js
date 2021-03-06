export const deleteBooking = (Id) => {
  return $.ajax({
    method: 'delete',
    url: `/api/bookings/${Id}`
  });
};

export const createBooking = (booking) => {
  return $.ajax({
    method: 'post',
    url: `/api/bookings`,
    data: {booking}
  });
};

export const fetchMyBookings = () => {
  return $.ajax({
    method:'get',
    url:'/api/bookings'
  });
};
