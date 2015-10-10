class Api::DecadesController < ApplicationController

  include Api::DecadesHelper

  before_action :current_api_user!

  def index
    render json: @current_user.decades
  end

  def create
    render json: @current_user.decades.create(decade_params)
  end

  def show
    render json: @current_user.decades.find(params[:id])
  end

  def destroy
    @current_user.decades.destroy(params[:id])
    render json: {status: 202, message: 'success'}
  end

  private
  def decade_params
    params.require(:decade).permit(:comment)
  end

end
