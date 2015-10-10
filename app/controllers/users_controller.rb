class UsersController < ApplicationController
  include SessionsHelper

  def new
    @user = User.new
  end

  def create
    User.create(user_params)
    redirect_to log_in_path
  end

  def log_in
  end

  def music
  return nil unless authenticate!
  @user = current_user
  @decades = Decades.all
end

  def profile
    authenticate!
    @user = current_user
    render layout: "profile_layout"
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

end
