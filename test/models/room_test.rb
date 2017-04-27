# == Schema Information
#
# Table name: rooms
#
#  id                  :integer          not null, primary key
#  user_id             :integer          not null
#  city                :string
#  lng                 :float
#  lat                 :float
#  description         :text
#  price               :integer          not null
#  bedrooms            :integer          not null
#  beds                :integer          not null
#  room_type           :string           not null
#  property_type       :string           not null
#  star_rating         :float
#  picture_url         :string
#  amenities           :text
#  name                :string
#  guests              :integer
#  created_at          :datetime
#  updated_at          :datetime
#  bathrooms           :float
#  listing_type        :string
#  personal_belongings :string
#

require 'test_helper'

class RoomTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
