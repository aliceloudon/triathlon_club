class TimeTrialsController < ApplicationController

  def time_trial_params
    params.require(:time_trial).permit([:title, :date, :discipline, :distance])
  end

  def index
    time_trials = TimeTrial.all
    render json: time_trials
  end

  def create
    time_trial = TimeTrial.create(time_trial_params)
    render json: time_trial
  end

end