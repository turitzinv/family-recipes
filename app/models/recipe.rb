class Recipe < ApplicationRecord
  has_many :comments
  has_many :users, through: :comments
  belongs_to :category

  #For ActiveStorage, removed due to memory leak?
  #has_one_attached :image_url

  validates :title, presence: true
  validates :ingredients, presence: true
  validates :instructions, presence: true
  validates :category_id, presence: true

end
