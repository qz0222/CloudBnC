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
#

class Room < ActiveRecord::Base
  validates :name, :user_id, :price, :bedrooms, :beds, :room_type, :property_type, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'


end
