class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
      )
    if @user
      log_in!(@user)
      render '/api/users/show'
    else
      render json: ["Invalid email or password"], status: 422
    end
  end

  def destroy
    if logged_in?
      log_out!
      render json: {}
    else
      render json: ["No current user to logout"], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
