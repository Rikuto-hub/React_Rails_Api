class ArticlesController < ApplicationController
  skip_before_action :require_login, only: [:index]

  def index
    articles = Article.all.with_attached_image
    render json: articles.map{
      |article|
      article.as_json.merge({
        image:url_for(article.image)
      })
    }
  end

  def create
    article = @current_user.articles.build(article_params)
    if article.save
      render json: article
    else
      render json: article.errors
    end
  end

  def destroy
    aritlce = @currnet_user.article.find(params[:id])
    if aritlce.destroy
      render json: article
    else
      render json: aritlce.errors
    end
  end

  private
  def article_params()
    params.require(:article).permit(:name, :price, :content, :image)
  end
end