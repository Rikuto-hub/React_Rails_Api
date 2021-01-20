class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :require_login
  before_action :check_xhr_header

  private
  def check_xhr_header
    return if request.xhr?

    render json: { error: 'forbidden' }, status: :forbidden
  end

  def require_login
    @current_user = User.find_by(id: session[:user_id])
    return if @current_user

    render json: { error: 'unauthorized' }, status: :unauthorized
  end
end
