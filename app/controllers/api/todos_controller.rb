class Api::TodosController < ApplicationController

  include Api::TodosHelper

  before_action :current_api_user!

  def index
    render json: @current_user.todos
  end

  def create
    todo = @current_user.todos.create(todo_params)
    render json: todo
  end

  def show
    render json: @current_user.todos.find(params[:id])
  end

  def destroy
    @current_user.todos.destroy(params[:id])
    render status: 202
  end

  private

  def todo_params
    params.require(:todo).permit(:task)
  end

end
