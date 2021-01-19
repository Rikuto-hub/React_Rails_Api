class AccountsController < ApplicationController
  skip_before_action :require_login, only: [:show]

  def show
    user = User.find(params[:id])
    articles = user.articles
    articles = articles.map{
      |article|
      article.as_json.merge({
        image: article.image.attachment.service.send(:object_for, article.image.key).public_url
      })
    }
    profile = user.profile
    connections = user.connections
    render json: profile.as_json.merge({
      avatar: profile.avatar.attachment.service.send(:object_for, profile.avatar.key).public_url,
      connections: connections,
      articles: articles
    })
  end
end