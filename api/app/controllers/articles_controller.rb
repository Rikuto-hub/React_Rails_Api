class ArticlesController < ApplicationController
  def index
    articles = Article.all.with_attached_image
    render json: articles.map{
      |article|
      article.as_json.merge({
        image:url_for(article.image)
      })
    }
  end

  def show
    article = Article.find(params[:id])
    image = article.image
      if image.present?
        image = encode_base64(image)
      end
    render json: article
  end

  def create
    article = Article.new(artilce_params)
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

  def encode_base64(image_file)
    image = Base64.encode64(image_file.download) # 画像ファイルをActive Storageでダウンロードし、エンコードする
    blob = ActiveStorage::Blob.find(image_file[:id]) # Blobを作成
    "data:#{blob[:content_type]};base64,#{image}" # Vue側でそのまま画像として読み込み出来るBase64文字列にして返す
  end

  # articles = Article.all.with_attached_image
  # render json: articles.to_json(include:{
  #   image_attachment: {include: :blob}
  # })

  private
  def artilce_params()
    params.require(:article).permit(:name, :price, :content, :image)
  end
end
