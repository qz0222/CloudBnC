class FixRoomcolumn < ActiveRecord::Migration
  def change
    remove_column :rooms, :total_rating
  end
end
