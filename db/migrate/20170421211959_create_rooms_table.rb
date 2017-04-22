class CreateRoomsTable < ActiveRecord::Migration
  def change
    create_table :rooms do |t|
      t.integer :user_id, null:false
      t.string :city
      t.float :lng
      t.float :lat
      t.text :description
      t.integer :price, null:false
      t.integer :bedrooms, null:false
      t.integer :beds,null:false
      t.string :room_type,null:false
      t.string :property_type,null:false
      t.float :star_rating
      t.string :picture_url
      t.text :amenities
    end

    add_index :rooms, :user_id
    add_index :rooms, :price
    add_index :rooms, :bedrooms
    add_index :rooms, :beds
    add_index :rooms, :room_type
    add_index :rooms, :property_type
  end
end
