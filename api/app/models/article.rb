class Article < ApplicationRecord
  has_one_attached :image
  belongs_to :user

  def self.search(search)
    if search
      Article.where(['name LIKE ?', "%#{search}%"])
    else
      Article.all
    end
  end
end