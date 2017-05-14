class TimeTrial < ActiveRecord::Base
  has_many :results
  has_many :members, through: :results
end
