class AddTimestampToRooms < ActiveRecord::Migration
  def change
    add_column(:rooms, :created_at, :datetime)
    add_column(:rooms, :updated_at, :datetime)
  end
end
