class Result < ActiveRecord::Base
  belongs_to :member
  belongs_to :timetrial
end
