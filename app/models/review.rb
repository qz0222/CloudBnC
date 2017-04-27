# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  room_id    :integer          not null
#  body       :text             not null
#  rating     :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ActiveRecord::Base

  validates  :user_id,  :room_id, :body,  presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :room,
    primary_key: :id,
    foreign_key: :room_id,
    class_name: "Room"

end
