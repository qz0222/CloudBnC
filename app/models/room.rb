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
#  start_date          :date
#  end_date            :date
#  total_rating        :float
#

class Room < ActiveRecord::Base
  validates :name, :user_id, :price, :bedrooms, :beds, :room_type, :property_type, :guests, :start_date, :end_date, presence: true


  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  has_many :reviews,
    primary_key: :id,
    foreign_key: :room_id,
    class_name: "Review"

  has_many :bookings,
    primary_key: :id,
    foreign_key: :room_id,
    class_name: "Booking"

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end



end
