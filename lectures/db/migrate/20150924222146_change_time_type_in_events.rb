class ChangeTimeTypeInEvents < ActiveRecord::Migration
  def change
    remove_column :events, :time
    add_column :events, :time, :datetime
  end
end
