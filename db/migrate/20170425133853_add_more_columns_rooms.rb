class AddMoreColumnsRooms < ActiveRecord::Migration
  def change
    add_column :rooms, :bathrooms, :float
    add_column :rooms, :listing_type, :string
  end
end
