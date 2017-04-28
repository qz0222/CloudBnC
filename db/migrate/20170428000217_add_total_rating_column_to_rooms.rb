class AddTotalRatingColumnToRooms < ActiveRecord::Migration
  def change
    add_column(:rooms, :start_date, :date)
    add_column(:rooms, :end_date, :date)
    add_column(:rooms, :total_rating, :float)
  end
end
