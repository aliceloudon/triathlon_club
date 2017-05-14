class MembersController < ApplicationController

  def member_params
    params.require(:member).permit([:name])
  end

  def index
    members = Member.all
    render json: members
  end

  def show
    member = Member.find(params[:id])
    render json: member
  end

  def create
    member = Member.create(member_params)
    render json: member
  end

end
