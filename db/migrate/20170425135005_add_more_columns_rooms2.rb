class AddMoreColumnsRooms2 < ActiveRecord::Migration
  def change
    add_column :rooms, :personal_belongings, :boolean
  end
end
