# == Schema Information
#
# Table name: rooms
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  city          :string
#  lng           :float
#  lat           :float
#  description   :text
#  price         :integer          not null
#  bedrooms      :integer          not null
#  beds          :integer          not null
#  room_type     :string           not null
#  property_type :string           not null
#  star_rating   :float
#  picture_url   :string
#  amenities     :text
#  name          :string
#  guests        :integer
#  created_at    :datetime
#  updated_at    :datetime
#  bathrooms     :float
#  listing_type  :string
#

class Room < ActiveRecord::Base
  validates :name, :user_id, :price, :bedrooms, :beds, :room_type, :property_type, :guests, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end


end
