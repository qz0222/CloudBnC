class AddBookingTable < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :room_id, null: false
      t.date :booking_start, null: false
      t.date :booking_end, null:false

      t.timestamps null: false
    end

    add_index :bookings, :user_id
    add_index :bookings, :room_id
  end
end
