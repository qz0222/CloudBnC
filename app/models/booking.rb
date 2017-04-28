# == Schema Information
#
# Table name: bookings
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  room_id       :integer          not null
#  booking_start :date             not null
#  booking_end   :date             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Booking < ActiveRecord::Base
  validates :user_id, :room_id, :booking_start, :booking_end, presence:true

  belongs_to :room,
    primary_key: :id,
    foreign_key: :room_id,
    class_name: 'Room'

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"


end
