class ProfilesController < ApplicationController
  def show
    articles = @current_user.articles
    articles = articles.map{
      |article|
      article.as_json.merge({
        image: article.image.attachment.service.send(:object_for, article.image.key).public_url
      })
    }
    profile = @current_user.profile
    connections = @current_user.connections
    render json: profile.as_json.merge({
      avatar: profile.avatar.attachment.service.send(:object_for, profile.avatar.key).public_url,
      connections: connections,
      articles: articles
    })
  end

  def update
    profile = @current_user.prepare_profile
    profile.assign_attributes(profile_params)
    if profile.save
      render json: { status: 'Registration', profile: profile }
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