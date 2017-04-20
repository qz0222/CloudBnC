class ChangeUsersTable < ActiveRecord::Migration
  def change
    rename_column :users, :username, :email
    add_column :users, :bitrhday, :date
    add_column :users, :f_name, :string
    add_column :users, :l_name, :string
    add_column :users, :description, :text
  end
end
