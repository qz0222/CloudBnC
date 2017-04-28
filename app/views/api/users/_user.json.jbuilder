json.extract! user, :id, :email, :f_name
json.bookings user.bookings do |booking|
  json.extract! booking, :id, :booking_start, :booking_end, :room
end
