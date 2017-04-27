class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :room_id, null: false
      t.text :body, null: false
      t.float :rating
      t.timestamps null: false
    end
  end
end
