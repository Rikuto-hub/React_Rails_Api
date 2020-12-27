class SessionsController < ApplicationController
  skip_before_action :require_login
  
  def create
    user = User.find_by(email: params[:email]&.downcase)
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      payload = { status: 'Login', name: user.name }
    else
      payload = { status: 'メールアドレスまたはパスワードが正しくありません。' }
    end
    render json: payload
  end

  def destroy
    session.delete(:user_id)
    render json: { message: 'ログアウトしました。' }
  end
end
