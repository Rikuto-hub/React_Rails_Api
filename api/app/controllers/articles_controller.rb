class ArticlesController < ApplicationController
  def index
    aricles = Article.all
    render = json: articles
  end

  def show
    article = Aricle.find(params[:id])
    render json: article
  end

  def create
    aricle = Article.new(aritlce_params)
    if article.save
      render json: article
    else
      render json: article.errors
    end
  end

  def destroy
    aritlce = Article.find(params[:id])
    if aritlce.destroy
      render json: article
    else
      render json: aritlce.errors
    end
  end

  private
  def aritlce_params()
    params.require(:article).permit(:name, :price, :content)
  end
end
