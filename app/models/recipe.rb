class Recipe < ApplicationRecord
  has_many :comments
  has_many :users, through: :comments
  belongs_to :category

  validates :title, presence: true
  validates :ingredients, presence: true
  validates :instructions, presence: true

end
