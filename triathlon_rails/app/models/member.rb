class Member < ActiveRecord::Base
  has_many :results
  has_many :time_trials, through: :results
end
