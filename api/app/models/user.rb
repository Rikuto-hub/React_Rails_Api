class User < ApplicationRecord
  has_secure_password

  has_many :articles, dependent: :destroy
  has_many :connections, dependent: :destroy
  has_one :profile, dependent: :destroy

  validates :password, length: { in: 6..20 }
  validates :name, uniqueness: { case_sensitive: true }
  validates_format_of [:name, :password], :with => /\A[a-zA-Z0-9]+\z/

  def prepare_profile
    profile || build_profile
  end
end
