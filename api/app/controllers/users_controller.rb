class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save(context: :signup)
      log_in user
      payload = { message: '登録が完了しました。', name: user.name }
    else
      payload = { errors: user.errors.full_messages }
    end
    render json: payload
  end
  
  private

  def user_params
    params.require(:user).permit(:name, :email, :email_confirmation, :password, :password_confirmation)
  end
end