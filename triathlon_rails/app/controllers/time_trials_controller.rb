class TimeTrialsController < ApplicationController

  def index
    timetrials = TimeTrial.all
    render json: timetrials
  end

end