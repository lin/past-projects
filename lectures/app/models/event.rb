class Event < ActiveRecord::Base
  validates_presence_of :title, :desc, :start_time
end
