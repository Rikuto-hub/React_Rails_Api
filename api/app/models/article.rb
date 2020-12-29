class Article < ApplicationRecord
  has_one_attached :image
  belongs_to :user

  validates :name, presence: true
  validates :name, length: { minimum: 3, maximum: 30 }
  validates :price, presence: true
  validates :content, presence: true
  validates :content, length: { minimum: 5, maximum: 100 }

  def self.search(search)
    if search
      Article.where(['name LIKE ?', "%#{search}%"])
    else
      Article.all
    end
  end
end