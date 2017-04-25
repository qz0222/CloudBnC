class ChangeMoreColumnsRoomsPersonalbelongings < ActiveRecord::Migration
  def change
    change_column :rooms, :personal_belongings, :string
  end
end
