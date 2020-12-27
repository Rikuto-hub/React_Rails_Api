class UsersController < ApplicationController
  skip_before_action :require_login, only: [:create]
  
  def create
    user = User.new(user_params)
    if user.save(context: :signup)
      session[:user_id] = user.id
      payload = { status: 'Registration', name: user.name }
    else
      payload = { status: '登録失敗', error: user.errors.full_messages }
    end
    render json: payload
  end
  
  private

  def user_params
    params.require(:user).permit(:name, :email, :email_confirmation, :password, :password_confirmation)
  end
end