class Result < ActiveRecord::Base
  belongs_to :member
  belongs_to :time_trial
end
