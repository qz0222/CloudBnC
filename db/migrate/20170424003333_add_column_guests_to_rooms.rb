class AddColumnGuestsToRooms < ActiveRecord::Migration
  def change
    add_column :rooms, :guests, :integer
  end
end
