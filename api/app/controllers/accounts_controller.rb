class AccountsController < ApplicationController
  skip_before_action :require_login, only: [:show]

  def show
    user = User.find(params[:id])
    articles = user.articles
    articles = articles.map{
      |article|
      article.as_json.merge({
        image:url_for(article.image)
      })
    }
    profile = user.profile
    connections = user.connections
    render json: profile.as_json.merge({
      avatar: url_for(profile.avatar),
      connections: connections,
      articles: articles
    })
  end
end