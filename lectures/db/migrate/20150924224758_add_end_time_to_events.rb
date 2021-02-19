class AddEndTimeToEvents < ActiveRecord::Migration
  def change
    add_column :events, :end_time, :datetime
    add_column :events, :more_info_url, :string
    rename_column :events, :time, :start_time
  end
end
