class SearchesController < ApplicationController
  skip_before_action :require_login

  def index
    articles = Article.search(params[:search]).with_attached_image
    render json: articles.map{
      |article|
      article.as_json.merge({
        image:url_for(article.image)
      })
    }
  end
end