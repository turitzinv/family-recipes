class Recipe < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :users, through: :comments
  belongs_to :category

  #For ActiveStorage, removed due to memory leak?
  #has_one_attached :image_url

  validates :title, presence: true
  validates :ingredients, presence: true
  validates :instructions, presence: true
  validates :category_id, presence: true
  validates :image_url, presence: true

end
