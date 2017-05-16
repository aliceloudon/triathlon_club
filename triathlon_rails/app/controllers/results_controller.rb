class ResultsController < ApplicationController

  def index
    results = Result.where({member: params[:member_id]})
    render json: results.as_json({
      only: [:time],
      include: {
        member: {
          only: [:name]
        },
        time_trial: {
          only: [:title, :date, :discipline, :distance]
        }
      }
    })
  end

  def all_results
    results = Result.all
    render json: results.as_json({
      only: [:id, :time],
      include: {
        member: {
          only: [:name]
        },
        time_trial: {
          only: [:id, :title, :date, :discipline, :distance]
        }
      }
    })
  end

  def create
    result = Result.create({
      time: params[:time],
      member_id: params[:member_id],
      time_trial_id: params[:time_trial_id]
      })
    render json: result
  end

  def destroy
    result = Result.find(params[:id])
    if result.destroy!
      render json: { status: :success }
    else
      render json: { status: :delete_failed }
    end
  end

end