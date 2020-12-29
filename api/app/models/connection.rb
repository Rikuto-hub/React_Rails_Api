class Connection < ApplicationRecord
  belongs_to :user

  validates :url, format: /\A#{URI::regexp(%w(http https))}\z/
  validates :content, presence: true
  validates :content, length: { minimum: 5, maximum: 30 }
end
