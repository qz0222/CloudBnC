class AddColumnRooms < ActiveRecord::Migration
  def change
    add_column :rooms, :name, :string
  end
end
