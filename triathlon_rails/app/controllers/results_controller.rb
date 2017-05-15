class ResultsController < ApplicationController

  def index
    # results = Result.where({member: params[:member_id]})
    # render json: results.as_json({
    #   only: [:time],
    #   include: {
    #     member: {
    #       only: [:name]
    #       },
    #       timetrial: {
    #         only: [:title, :date, :discipline, :distance]
    #       }
    #     }
    #     })
    results = Result.all
    render json: results
  end

  def create
    result = Result.create({
      time: params[:time],
      member_id: params[:member_id],
      time_trial_id: params[:time_trial_id]
      })
    render json: result
  end

end