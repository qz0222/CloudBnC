class Adddefaultvaluetototalratingagain < ActiveRecord::Migration
  def change
    change_column :rooms, :total_rating, :float, default:0.0
  end
end
