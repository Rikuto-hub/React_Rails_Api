class ProfilesController < ApplicationController
  def show
    profile = @current_user.profile
    render :json profile
    connections = @current_user.connections
    render json: connections
  end

  def update
    profile = @current_user.prepare_profile
    profile.assign_attributes(profile_params)
    if profile.save
      render json: { status: 'ok', profile: profile }
    else
      render json: {status: 'error'}
    end
  end

  private
  def profile_params
    params.require(:profile).permit(
      :name,
      :introduction,
      :avatar
    )
  end
end