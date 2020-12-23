class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email]&.downcase, provider: nil)
    if user&.authenticate(params[:password])
      log_in user
      params[:remember] ? remember(user) : forget(user)
      payload = { message: 'ログインしました。', name: user.name }
    else
      payload = { errors: ['メールアドレスまたはパスワードが正しくありません。'] }
    end
    render json: payload
  end

  def destroy
    log_out
    render json: { message: 'ログアウトしました。' }
  end
end
