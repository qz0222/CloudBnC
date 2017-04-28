class FixRoomcolumn2 < ActiveRecord::Migration
  def change
    add_column :rooms, :total_rating, :float
  end
end
