class ChangeUsersBirthday < ActiveRecord::Migration
  def change
    rename_column :users, :bitrhday, :birthday
  end
end
